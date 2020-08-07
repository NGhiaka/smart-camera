import React from 'react';


function Content() {
  return (
      <div className="swap-content">
        <video id="video" className="hidden">Your browser does not support the video tag.</video>
        <canvas className="center-block" id="canvasOutput"></canvas>
      </div>
  );
}

export default Content;