import React from 'react'
import "../App.css";
import "./Video.css";
import { Button } from './Button';

function Video() {
  return (
    <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            BOOK NOW
          </Button>
          <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            DEEZ NUTS
          </Button>
    <div className='video-container'>
      <video src="/planevideo.mp4" autoPlay loop muted/>
      <h1>Come fly with us.</h1>
      <h2></h2>
      <p>For quick cheap trips and more!</p>
      
      </div>
    </div>
  )
}

export default Video;
