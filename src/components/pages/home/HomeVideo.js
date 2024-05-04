import React, { useState, useRef } from 'react';
import videoSrc from "../../img/video.mp4";
import "./HomeVideo.css";

function VideoBackground() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-background-container">
      <div className="video-overlay"></div> {/* Overlay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
        className="video-background"
      >
        Your browser does not support the video tag.
      </video>
      <div className='textcontainer'>
        <div className="videored-dash"></div>
        <div className="main-text">
          <span className="line1">Repair Your Laptop &amp; Desktop</span>
          <span className="line2"> Computer</span>
        </div>
        <div className="sub-text">
          <span className="subline1">We provide always our best services to our clients and always try to</span>
          <span className="subline2">achieve our client's trust and satisfaction</span>
        </div>
      </div>
      <button className="toggle-button" onClick={togglePlay}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </div>
  );
}

export default VideoBackground;
