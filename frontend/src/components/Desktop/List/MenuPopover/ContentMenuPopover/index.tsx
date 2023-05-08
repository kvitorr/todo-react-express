import React from 'react'
import { ContentPopoverWrapper } from './style'
import { X } from '@phosphor-icons/react'

interface IContentMenuPopover {
  handleClose: () => void;
  onDeleteList: () => void;
}

const ContentMenuPopover: React.FC<IContentMenuPopover> = ({handleClose, onDeleteList}) => {
  return (
    <ContentPopoverWrapper>
        <div className='popoverHeader'>
            <p>Ações da Lista</p>
            <X className='popoverClose' size={16} onClick={() => handleClose()}/>  
        </div>
        <div className='popoverContent'>
            <button onClick={() => onDeleteList()} className='popoverOption'>Excluir Lista</button>
        </div>
    </ContentPopoverWrapper>
  )
}

export default ContentMenuPopover