import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import "../css/components/HeaderNav.css" ; 


function HeaderNav() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <nav class="header-nav">
            <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Dashboard</span>
            </div>
            <div class="search-box">
            <input type="text" placeholder="Search..." />
            <i class="bx bx-search"></i>
            </div>
            <div class="profile-details" onClick={handleClick}>
            <img src={"/default_user.png"} alt=""></img>
            <span class="admin_name">Prem Shahi</span>
            <i class="bx bx-chevron-down"></i>
            </div>
            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content.</Typography>
      </Popover>
        </nav>
        
    )
}

export default HeaderNav; 
