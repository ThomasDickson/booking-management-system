import React from 'react'
import { Box, Button, Link} from '@mui/material';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import "../App.css";
import "./Video.css";
import video from '../assets/planevideo.mp4'

function Video() {

  return (
    <Box className="video-container"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="100px"
      
      width={'100%'}
      height={'300px'}
    >
      <video src={video} autoPlay loop muted/> 

      <Box className="text-container"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginTop="150px"
        marginLeft="20%"
        width={'100%'}
        height={'300px'}
      >
        <div>
          <span className="bigText">Come fly with us.<br/>
            <span className="smallText">Your next adventure awaits you!</span>
          </span>
          <p />
          <Button 
            className="booknow-button"
            component={Link}
            to="booking-management-system/booking" 
            size="large" 
            variant="outlined"
            endIcon={<AirplaneTicketIcon />}
          >
            Book Now
          </Button>
        </div>
      </Box>       
    </Box>
  )
}

export default Video;
