
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { red } from '@mui/material/colors';


export default function MenuBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static"
      style = {{backgroundColor: "#F2F2F2", color:"black"}}>
        
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          WorkSpot
        </Typography>
  
        {props.menuOptions.map((option) =>
          option.showAuth && (
            <Button
              key={option.label}

              color="inherit"
              component={Link}
              to={option.label}
              onClick={option.hasLogoutOption ? props.handleLogout : null}
            >
              {option.label}
            </Button>
          )
        )}
        <Avatar
          onClick={handleMenuOpen}
          sx={{ cursor: 'pointer', marginLeft: 2 }}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {['Profile', 'Account', 'Dashboard', 'Logout'].map((item) => (
            <MenuItem key={item} onClick={handleMenuClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}


