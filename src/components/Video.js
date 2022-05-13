import React from 'react'
import { Box } from '@mui/material';
import "../App.css";
import "./Video.css";

function Video() {

  return (
    <Box className="video-container"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="100px"
      width={'100%'}
      height={'300px'}>
      <video src="/planevideo.mp4" autoPlay loop muted/> 

      <Box className="text-container"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginTop="100px"
        marginLeft="20%"
        width={'100%'}
        height={'300px'}
      >
        <p className="bigText">Come fly with us.</p>
        <p className="smallText">For quick cheap trips and more!</p>
      </Box>
             
    </Box>
  )
}

export default Video;
