import React from 'react'
import { ListWrapper } from './style'
import { Task } from '../Task'
import { Plus } from '@phosphor-icons/react'

const List = () => {
  return (
        <ListWrapper>
            <div className='listHeader'>
                <p>React</p>
                <p>...</p>
            </div>

            <div className='listDos'>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>

            </div>
            
            <button className='buttonAddNewTask'>
                <Plus size={16} />
                <p>
                    Adicionar um cartão
                </p>
            </button>
        </ListWrapper>
  )
}

export default List