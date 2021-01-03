import * as blazeface from '@tensorflow-models/blazeface';
import * as tf from '@tensorflow/tfjs-core';
import * as tfjsWasm from '@tensorflow/tfjs-backend-wasm';

import FPSStats from "react-fps-stats";

import React, { useState, useEffect } from 'react';

tfjsWasm.setWasmPath('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@latest/dist/tfjs-backend-wasm.wasm');

const FaceDetection = ({model}) => {  
  let ctx, videoWidth, videoHeight, video, canvas;
  
  const state = {
    backend: 'wasm'
  };

  useEffect (()=>{
      // setModelPromise(cocoSsd.load());
      setupPage();
  });
  async function setupCamera() {
    video = document.getElementById('video');

    const stream = await navigator.mediaDevices.getUserMedia({
      'audio': false,
      'video': { facingMode: 'user' },
      'mirror': false,
    });
    video.srcObject = stream;

    return new Promise((resolve) => {
      video.onloadedmetadata = () => {
        resolve(video);
      };
    });
  }

const renderPrediction = async () => {
  canvas = document.getElementById('output');
  
  if (canvas){
    // stats.begin();
    const returnTensors = false;
    const flipHorizontal = true;
    const annotateBoxes = true;
    const predictions = await model.estimateFaces(
      video, returnTensors, flipHorizontal, annotateBoxes);
    // console.log(predictions);
    canvas.width = videoWidth;
    canvas.height = videoHeight;
    ctx = canvas.getContext('2d');
  
    if (predictions.length > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (let i = 0; i < predictions.length; i++) {
        if (returnTensors) {
          predictions[i].topLeft = predictions[i].topLeft.arraySync();
          predictions[i].bottomRight = predictions[i].bottomRight.arraySync();
          if (annotateBoxes) {
            predictions[i].landmarks = predictions[i].landmarks.arraySync();
          }
        }
        ctx.beginPath();
        const start = predictions[i].topLeft;
        const end = predictions[i].bottomRight;
        const size = [end[0] - start[0], end[1] - start[1]];
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        // ctx.fillRect(start[0], start[1], size[0], size[1]);
        ctx.rect(start[0], start[1], size[0], size[1]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'green';
        // ctx.fillStyle = 'green';
        ctx.stroke();
        ctx.font = '10px Arial';
        // if (annotateBoxes) {
        //   const landmarks = predictions[i].landmarks;
        //   console.log(landmarks);
        //   ctx.fillStyle = "red";
        //   for (let j = 0; j < landmarks.length; j++) {
        //     const x = landmarks[j][0];
        //     const y = landmarks[j][1];
        //     ctx.fillRect(x, y, 5, 5);
        //   }
        // }
      }
    }
  
    // stats.end();
  
    requestAnimationFrame(renderPrediction);
  }
  
};

const setupPage = async () => {
  await tf.setBackend(state.backend);
  await setupCamera();
  video.play();

  videoWidth = video.videoWidth;
  videoHeight = video.videoHeight;
  video.width = videoWidth;
  video.height = videoHeight;

  canvas = document.getElementById('output');
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  ctx = canvas.getContext('2d');
  // ctx.fillStyle = "rgba(255, 255, 255, 0)";

  model = await blazeface.load();

  renderPrediction();
};
  return (
      <div className='result-detect'>
        <FPSStats />
        <video id="video">
        </video>
        <canvas id="output"></canvas>
      </div>
  )
}

export default FaceDetection;