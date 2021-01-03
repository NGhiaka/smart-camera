import * as cocoSsd from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs-core';
import * as tfjsWasm from '@tensorflow/tfjs-backend-wasm';
// import * as cpu from '@tensorflow/tfjs-backend-cpu'
// import * as webgl from '@tensorflow/tfjs-backend-webgl'
import FPSStats from "react-fps-stats";

import React, { useState, useEffect } from 'react';

const ObjectDetection = ({model}) => {
    const modelPromise = cocoSsd.load('CenterNet_Resnet50_v2'); //CenterNet Resnet50 V2
    let ctx, videoWidth, videoHeight, video, canvas;
    const state = {
        backend: 'wasm'
      };
    useEffect (()=>{
        setupPage();
    });
    async function setupCamera() {
        video = document.getElementById('video');
        
        const stream = await navigator.mediaDevices.getUserMedia({
            'audio': false,
            'video':{ facingMode: 'user' },
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
        if(canvas){
            const model = await modelPromise;
            console.log('model loaded');
            console.time('predict1');
            const result = await model.detect(video);
            console.timeEnd('predict1');
                
            // console.log(videoWidth);
            // canvas.width = videoWidth;
            // console.log(canvas.width);
            // console.log(canvas);
            // console.log(canvas.width);
            // canvas.height = videoHeight;
            // ctx = canvas.getContext('2d');
            // ctx.font = '10px Arial';
            if (result.length > 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                console.log('number of detections: ', result.length);
                for (let i = 0; i < result.length; i++) {
                    ctx.beginPath();
                    ctx.rect(...result[i].bbox);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = 'green';
                    ctx.fillStyle = 'green';
                    ctx.stroke();
                    ctx.fillText(
                        result[i].score.toFixed(3) + ' ' + result[i].class, result[i].bbox[0],
                        result[i].bbox[1] > 10 ? result[i].bbox[1] - 5 : 10);
                }
            }
        
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
        ctx.font = '10px Arial';
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";

        renderPrediction();
      };
    return (
        <div className='result-detect'>
            <FPSStats />
            <video id="video" />
            <canvas id="output" />
        </div>
    )
}

export default ObjectDetection;