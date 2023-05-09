import React, { useState, useContext, useRef } from 'react'
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
  tasks:  ITask[]
}

const Desktop = () => {
  const { lists, setLists } = useContext(ListContext)

  return (
    <DesktopWrapper >
        {
          lists.map((list) => {
            return <List key={list.id} {...list}/>
          })
        }
        <ListButton/>
    </DesktopWrapper>
  )
}

export default Desktop