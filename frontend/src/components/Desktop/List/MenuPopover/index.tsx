import * as React from 'react';
import Popover from '@mui/material/Popover';
import { ContentWrapper } from './style';
import ContentMenuPopover from './ContentMenuPopover';
import { Gear } from '@phosphor-icons/react';

interface IMenuPopoverProps {
  onDeleteList: () => void
}

const MenuPopover: React.FC<IMenuPopoverProps> = ( {onDeleteList} ) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <ContentWrapper >
        <button className='listOptions' aria-describedby={id} onClick={handleClick}>
          <Gear size={16}/>
        </button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
        >
            <ContentMenuPopover handleClose={handleClose} onDeleteList={onDeleteList}/>
        </Popover>
    </ContentWrapper>
  )
}

export default MenuPopover