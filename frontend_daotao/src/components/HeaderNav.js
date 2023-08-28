import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from '@mui/material';

import "../css/components/HeaderNav.css" ; 
import { URL_ } from '../config/constants';


function HeaderNav() {
  let currentUser = {}; 
  try {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
  } catch (error) {
    
  }
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
                {
                  currentUser.idUser ? 
                    (<span class='admin_name'>{currentUser.fullName}</span>)
                  :
                    (<span class='admin_name'>Hello</span>)
                }
                  
               
              
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
        <Typography className='Typography_headerNav' sx={{ p: 7 }}>
            <p><Link href={URL_.HOME}>Home</Link></p>
            <p><Link href={URL_.SV_HOME} >Manage</Link></p>
            <p><Link href={URL_.SV_LOGIN}>Login</Link></p>
            <p><Link href={URL_.SV_REGISTER}>Register</Link></p>
            <p><Link>Log out</Link></p>
        

        </Typography>
      </Popover>
        </nav>
        
    )
}

export default HeaderNav; 
