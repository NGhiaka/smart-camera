import React, {useState, useEffect} from "react";
import Select from 'react-select';
import axios from 'axios';
import { Base64 } from 'js-base64';
import UploadFile from './UploadFileComponent';
import FaceDetection from '../../model/faceDetection';
import ObjectDetection from '../../model/objectDetection';
import AIDetection from '../../model';
const options = [
    { value: 'face', label: 'Nhận dạng khuôn mặt' },
    { value: 'object', label: 'Nhận dạng đối tượng' },
  ]
export default function SmartCamera() {
    const [ai, setAI] = useState("face");
    const [title, setTitle] = useState("Nhận dạng khuôn mặt");
  
    const handleChange = (value) => {
      setTitle(value.label);
      setAI(value.value);
    }
  return (
    <div className="camera">
        <h4 className="title text-center">{title}</h4>
        <div className="form-input d-flex justify-content-between align-items-center mx-auto">
            {/* <UploadFile fileName={image} handleUpload={handleUpload}/> */}
            <div id="select-option" className="select-wrap position-relative">  
                <div className="selected-option position-relative">
                 <Select options={options} 
                    onChange={handleChange}
                  />
                </div>
            </div>
            {/* <div className="action">
                <button id="btn-search" onclick="">Ok</button>
            </div> */}
        </div>
        <div className="">
          {/* <AIDetection type={ai} /> */}
          { (ai==='face' ? (<FaceDetection />) : <ObjectDetection />) }
          
          
        </div>        
      </div>

)
}