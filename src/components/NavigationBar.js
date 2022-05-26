import React from 'react'
import './NavigationBar.css';
import '../App.css';
import { AppBar, Button, IconButton, Toolbar} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <React.Fragment >
      <AppBar sx={{background: "#fff", 
                   boxShadow: "0 1px 10px rgba(161, 161, 161, 0.2)"}}>
        <Toolbar>
          <Link className="navbar-logo" to="/">
              FlyDreamAir
          </Link>
          <Button 
            className="navbar-booking"
            component={Link} 
            to="/booking" 
          >
              Bookings
          </Button>
          <Button
            className="navbar-about" 
            component={Link} 
            to="/about" 
          >

    

            About
          </Button>


          <Button
            className="navbar-test" 
            component={Link} 
            to="/test" 
          >
            test
          </Button>


          <IconButton
            className="navbar-account"
            component={Link}
            to="/account"
            size="small">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment> 
  );
}

export default NavigationBar;