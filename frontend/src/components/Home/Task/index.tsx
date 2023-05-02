import React from 'react'
import { TaskWrapper } from './styles'
import { PencilSimple } from '@phosphor-icons/react'



export const Task = () => {
  return (
    <TaskWrapper>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus itaque velit odio ea fugit </p>
        <div className='iconWrapper'>
            <PencilSimple size={16}/>
        </div>
    </TaskWrapper>
  )
}

