import React from 'react'
import "../App.css";
import "./Video.css";

function Video() {
  return (
    <div>
      <video src="/planevideo.mp4" autoPlay loop muted/>
      <p className="bigText">Come fly with us.</p>
      <p className="smallText">For quick cheap trips and more!</p>
    </div>
  )
}

export default Video;
