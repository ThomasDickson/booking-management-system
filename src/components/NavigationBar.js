import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button} from "@mui/material";
import { AccountCircle} from "@mui/icons-material"

function NavigationBar() {
  return (
    <React.Fragment>
      <AppBar sx={{background: "#fff"}}>
        <Toolbar>
          <Typography variant="h6" sx={{ marginLeft: "10%", flexGrow: 1}}>
            FlyDreamAir
          </Typography>
          <Button>
            Bookings
          </Button>
          <Button>
            Bookings
          </Button>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ marginRight: "10%"}}
            >
            <AccountCircle sx={{color: "#2796FD"}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavigationBar;