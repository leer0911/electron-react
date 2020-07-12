import React from 'react';
import { IconButton } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import MoodIcon from '@material-ui/icons/Mood';
import { Emoji } from '../../components';

export default function SimplePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton component="span" size="small" onClick={handleClick}>
        <MoodIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Emoji onSelect={() => {}} />
      </Popover>
    </div>
  );
}
