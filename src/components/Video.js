import React from 'react'
import { Button } from './Button'

function Video() {
  return (
    <div className='video-container'>
      <video src="/planevideo.mp4" autoPlay loop />
      <h1>Come fly with us.</h1>
      <p>For quick cheap trips and more!</p>
      <div className='hero-btns'>

      </div>
    </div>
  )
}

export default Video