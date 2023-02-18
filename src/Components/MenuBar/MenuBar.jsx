
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function MenuBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#F2F2F2", color: "black" }}>
      <Toolbar>
        <Typography variant="h4" style={{ fontWeight: 600, color: 'black' }} component="div" sx={{ flexGrow: 1 }}>
          WorkSpot
        </Typography>
  
        {props.menuOptions.map((option) =>
          option.showAuth && !option.hasLogoutOption && (
            <Button
              key={option.label}
              color="inherit"
              component={Link}
              to={option.label}
            >
              {option.label}
            </Button>
          )
        )}
  
        <Avatar onClick={handleMenuOpen} style={{backgroundColor: '#5F8575'}} sx={{ cursor: "pointer", marginLeft: 2 }} />
  
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {props.menuOptions.map((option) =>
            option.showAuth && option.hasLogoutOption && (
              <MenuItem key={option.label} onClick={props.handleLogout}>
                {option.label}
              </MenuItem>
            )
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
