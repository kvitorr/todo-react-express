import React, { useState, useContext, useRef, useEffect } from 'react'
import { DesktopWrapper } from './styles'
import List from './List'
import { ListButton } from './ListButton'
import { ListContext } from '../../context/ListContext'
import ReactDOM from 'react-dom';

export interface ITask {
  id: string
  idList: string
  content: string
}

export interface IList { 
  id: string 
  title: string
}

const Desktop = () => {
  const { lists } = useContext(ListContext)

  const desktopWrapperDiv = useRef<HTMLDivElement>(null);
  const [exibirBotao, setExibirBotao] = useState(true)


  useEffect(() => {
    const desktop = desktopWrapperDiv.current;
    if (desktop) {
      desktop.scrollLeft = 100000000000000;
    }
  }, [exibirBotao]);

  return (
    <DesktopWrapper ref={desktopWrapperDiv}>
        {
          lists.map((list) => {
            return <List key={list.id} {...list}/>
          })
        }
        <ListButton exibirBotao={exibirBotao} setExibirBotao={setExibirBotao}/>
    </DesktopWrapper>
  )
}

export default Desktop