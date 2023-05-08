import React from 'react'
import { TaskWrapper } from './styles'
import { PencilSimple } from '@phosphor-icons/react'
import { ITaskProps } from '..'

export const Task: React.FC<ITaskProps> = ({id, content}) => {
  return (
    <TaskWrapper>
        <p className='description'>{content}</p>
        <div className='iconWrapper'>
            <PencilSimple size={16}/>
        </div>
    </TaskWrapper>
  )
}

