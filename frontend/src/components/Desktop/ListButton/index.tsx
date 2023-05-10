import React, { useState, useRef, useEffect, useContext } from 'react'
import { ListButtonWrapper, ListInputWrapper } from './style'
import { Plus, X } from '@phosphor-icons/react'
import { ListContext } from '../../../context/ListContext'
import { IList } from '..'
import { deepCopy } from '../../../utils/deepCopy'


interface ListButtonProps {
  exibirBotao: boolean,
  setExibirBotao: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListButton: React.FC<ListButtonProps> = ({exibirBotao, setExibirBotao}) => {

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const divInputRef = useRef<HTMLDivElement>(null);
  const [newListContent, setNewListContent] = useState('');

  const { lists, setLists } = useContext(ListContext)

  const handleClick = () => {
    setExibirBotao(!exibirBotao)
  }

  const handleCancelClick = () => {
    setNewListContent('')
    setExibirBotao(!exibirBotao)
  }

  function handleClickFora(event: MouseEvent) {
    if (divInputRef.current && !divInputRef.current.contains(event.target as Node)) {
      setNewListContent('')
      setExibirBotao(true);
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

  function handleNewListContent(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewListContent(event.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  const handleAddList = () => {

    const copyLists = deepCopy(lists)

    const newList: IList = {
      id: String(lists.length + 1),
      title: newListContent,
    }

    copyLists.push(newList)

    setLists(copyLists)
    setExibirBotao(!exibirBotao)
    setNewListContent('')
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [exibirBotao]);
  

  return (
    <>
      {
      exibirBotao ?  (
        <ListButtonWrapper>
          <button className='buttonWrapper'>
            <div className='buttonContent' onClick={handleClick}>
              <Plus size={16} />
              <p>
                  Adicionar uma Lista
              </p>
            </div>
          </button>
        </ListButtonWrapper>
        ) : (
          <ListButtonWrapper>
            <ListInputWrapper className="wrapperNewTask" ref={divInputRef}>
                      <div className='title'>
                        <p>Adicione um Título:</p>
                      </div>
                      <textarea ref={textareaRef} className="inputNewTask" autoFocus value={newListContent} onChange={handleNewListContent}/>                    
                      <div className="wrapperButtons">
                          <button className="buttonAddNewTask" onClick={handleAddList}>Adicionar Lista</button>
                          <X onClick={handleCancelClick} size={20} />
                      </div>
            </ListInputWrapper>
          </ListButtonWrapper>

        )
    }
    
    </>
    
  )
}
