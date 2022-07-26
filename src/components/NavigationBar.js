import React from 'react'
import './NavigationBar.css';
import '../App.css';
import { AppBar, Button, IconButton, Toolbar} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <React.Fragment>
      <AppBar sx={{background: "#fff", 
                   boxShadow: "0 1px 10px rgba(161, 161, 161, 0.2)"}}>
        <Toolbar>
          <Link className="navbar-logo" to="/booking-management-system">
              FlyDreamAir
          </Link>
          <Button 
            className="navbar-booking"
            component={Link} 
            to="booking-management-system/booking" 
          >
              Bookings
          </Button>
          <Button
            className="navbar-about" 
            component={Link} 
            to="booking-management-system/about" 
          >
            About
          </Button>
          <IconButton
            className="navbar-account"
            component={Link}
            to="booking-management-system/account"
            size="small">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment> 
  );
}

export default NavigationBar;