import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popperHovered, setPopperHovered] = React.useState(false);

  const handleButtonMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleButtonMouseLeave = () => {
    setAnchorEl(null);
  };

  const handlePopperMouseEnter = () => {
    setPopperHovered(true);
  };

  const handlePopperMouseLeave = () => {
    setPopperHovered(false);
  };

  const open = Boolean(anchorEl) || popperHovered;
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button
        aria-describedby={id}
        type="button"
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      >
        Hover to Toggle Popper
      </button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        onMouseEnter={handlePopperMouseEnter}
        onMouseLeave={handlePopperMouseLeave}
      >
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>
  );
}
