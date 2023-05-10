import React, { useState, useRef, useEffect, useContext } from "react";
import { ListWrapper } from './style'
import { Plus, X } from '@phosphor-icons/react'
import MenuPopover from './MenuPopover'
import { Task } from './Task'
import { IList, ITask } from "..";
import { ListContext } from "../../../context/ListContext";
import { deepCopy } from "../../../utils/deepCopy";
import { TaskContext } from "../../../context/TaskContext";

interface IListProps {
    id: string
    title: string
}

const List: React.FC<IListProps> = ({id, title}) => {
    const [exibirBotao, setExibirBotao] = useState(true);
    const divInputRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null)


    const {lists, setLists} = useContext(ListContext)
    const {tasks, setTasks} = useContext(TaskContext)

    const [newTaskContent, setNewTaskContent] = useState('');


    const dosWrapperDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktop = dosWrapperDiv.current;
    if (desktop) {
      desktop.scrollTop = 100000000000000;
    }
  }, [tasks, exibirBotao]);
  
    function handleClick() {
      setExibirBotao(false);
    }
  
    function handleClickFora(event: MouseEvent) {
      if (divInputRef.current && !divInputRef.current.contains(event.target as Node)) {
        setExibirBotao(true);
        setNewTaskContent('')
      }
    }
  
    useEffect(() => {
      const listener = (event: MouseEvent) => {
        handleClickFora(event);
      };
  
      if (!exibirBotao) {
        document.addEventListener("mousedown", listener);
      } else {
        document.removeEventListener("mousedown", listener);
      }
  
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [exibirBotao]);

    function handleDeleteList(id: string): void {
      const listFiltered = lists.filter((list) => list.id != id) 
      const tasksFiltered = tasks.filter((task) => task.idList != id)
      setLists(listFiltered)
      setTasks(tasksFiltered)
    }

    function handleNewTaskContent(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setNewTaskContent(event.target.value);

      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }
    
    function handleAddTask(): void {
      const idTask = String(tasks.length + 1)

      const newTask: ITask = {
        id: idTask,
        idList: id,
        content: newTaskContent
      }

      const copyTasks = deepCopy(tasks)
      copyTasks.push(newTask)

      setTasks(copyTasks)
      setNewTaskContent('')

      if (divInputRef.current) {
        divInputRef.current.querySelector('textarea')?.focus();
      }
    }


  return (
        <ListWrapper>
            <div className='listHeader'>
                <p>{title}</p>
                <MenuPopover onDeleteList={() => handleDeleteList(id)} />
            </div>

            <div className='listDos' ref={dosWrapperDiv}>
                {tasks.filter((task) => task.idList === id).map((task) => {
                    return <Task key={task.id} idList={id} id={task.id} content={task.content}/>
                })}

            {exibirBotao ? (
                <button className="buttonAddNewCard" onClick={handleClick}>
                    <Plus size={16} />
                    <p>Adicionar um cartão</p>
                </button>
                ) : (
                <div className="wrapperNewTask" ref={divInputRef}>
                    <textarea ref={textareaRef} className="inputNewTask" autoFocus value={newTaskContent} onChange={handleNewTaskContent}/>                    
                    <div className="wrapperButtons">
                        <button className="buttonAddNewTask" onClick={() => handleAddTask()}>Adicionar Cartão</button>
                        <X onClick={() => {setExibirBotao(true); setNewTaskContent('') }} size={20} />
                    </div>
                </div>
                )}
            </div>
            
        </ListWrapper>
  )
}

export default List