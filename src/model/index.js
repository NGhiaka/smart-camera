import * as cocoSsd from '@tensorflow-models/coco-ssd'
import * as blazeface from '@tensorflow-models/blazeface';

import React, { useState, useEffect } from "react";
import ObjectDetection from './objectDetection';
import FaceDetection from './faceDetection';

const AIModel = ({ type }) => {
    const [model, setModel] = useState(null);
    
    const loadFaceModel = async () => {
      const m = await blazeface.load();
      return m;
    }
    const loadObjectModel = async () => {
      const m = await cocoSsd.load('CenterNet_Resnet50_v2');
      return m;
    }
    useEffect (()=>{
      switch (type){
        case 'face':
          setModel(loadFaceModel());
          break;
        case 'object':
          setModel(loadObjectModel());
          break;
        default:
          setModel(null);
      }
    },[type]);
    return (
        <>
        {
          (type === 'face' && <FaceDetection model={model} />)
         
        }
        { (type === 'object' && <ObjectDetection model={model} />)}
        </>
    )
}

export default AIModel;