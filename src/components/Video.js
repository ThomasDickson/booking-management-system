import React from 'react'
import "./Video.css"
function Video() {
  return (
    <div className='video-container'>
      <video src="/planevideo.mp4" autoPlay loop />
      <h1>Come fly with us.</h1>
      <p>For quick cheap trips and more!</p>
    </div>
  )
}

export default Video