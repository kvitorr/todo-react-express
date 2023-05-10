import React, { useContext, useEffect, useRef, useState } from 'react'
import { TaskWrapper, TextAreaWrapper, WrapperButtons } from './styles'
import { Eraser, PencilSimple, Trash, TrashSimple, X } from '@phosphor-icons/react'
import { ITask } from '../..'
import { ListContext } from '../../../../context/ListContext'
import { deepCopy } from '../../../../utils/deepCopy'
import { TaskContext } from '../../../../context/TaskContext'

export const Task: React.FC<ITask> = ({id, idList, content}) => {
  const { lists, setLists } = useContext(ListContext)

  const [exibirTask, setExibirTask] = useState(true)
  const [oldContentTask, setOldContentTask] = useState(content)
  const [newContentTask, setNewContentTask] = useState(content)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const divInputRef = useRef<HTMLDivElement>(null);

  const {tasks, setTasks} = useContext(TaskContext)


  function handleClickFora(event: MouseEvent) {
    if (divInputRef.current && !divInputRef.current.contains(event.target as Node)) {
      setExibirTask(true);
      setNewContentTask(oldContentTask)
    }
  }

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      handleClickFora(event);
    };

    if (!exibirTask) {
      document.addEventListener("mousedown", listener);
    } else {
      document.removeEventListener("mousedown", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [exibirTask]);

  const handleClick = () => {
    setExibirTask(!exibirTask)

    if(textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  const handleCancelEditClick = () => {
    setNewContentTask(oldContentTask)
    setExibirTask(!exibirTask)
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContentTask(event.target.value)
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [exibirTask]);
  
  const handleEditTask = () => {
    setOldContentTask(newContentTask)
    setExibirTask(!exibirTask)
  }

  const handleDeleteTask = () => {
    setExibirTask(!exibirTask)

    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  useEffect(() => {
    if (!exibirTask && textareaRef.current) {
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
      textareaRef.current.focus();
    }
  }, [exibirTask]);
  

  return (
    <>
      {exibirTask ? (
        <TaskWrapper>
            <p className='description'>{newContentTask}</p>
            <div className='iconWrapper'>
                <PencilSimple onClick={handleClick} size={16}/>
            </div>
        </TaskWrapper>

      ) : (
        <div ref={divInputRef}>
          <TextAreaWrapper>
              <textarea
                autoFocus
                ref={textareaRef} 
                value={newContentTask} 
                className='inputTask' 
                onChange={handleContentChange}
              />
              <div className='iconWrapper'>
                  <X onClick={handleCancelEditClick} size={16}/>
              </div>
          </TextAreaWrapper>
          <WrapperButtons >
              <button className="buttonAddNewTask" onClick={handleEditTask}>Atualizar Cartão</button>
              <button className="buttonDeleteTask" onClick={handleDeleteTask}>Apagar</button>
          </WrapperButtons>
        </div>
      )
      }
    </>
  )
}

