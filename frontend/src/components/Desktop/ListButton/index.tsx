import React from 'react'
import { ListButtonWrapper } from './style'
import { Plus } from '@phosphor-icons/react'

export const ListButton = () => {
  return (
    <ListButtonWrapper>
        <Plus size={16} />
        <p>
            Adicionar um cartão
        </p>
    </ListButtonWrapper>
  )
}
