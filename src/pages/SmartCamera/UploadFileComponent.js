import React from 'react';

const UploadFile = ({fileName, handleUpload}) => {
    console.log(fileName);
    return (
        <div className="input-file">
            <div className="uploadOuter position-relative">
                <div className="preview position-absolute">
                    <div className="img position-relative">
                    </div>
                    <div className="name"></div>
                </div>
                <label for="uploadImg" className="upload-image">Upload</label>
                <div className="dragBox">
                    <div className="dragBox-text">
                        <strong>Or</strong>
                        <span className="ml-3">{fileName ? fileName.name : "Drag &amp; drop an image here"}</span>
                    </div>
                    <input type="file" id="uploadImg" title="" onChange={handleUpload} accept="image/jpg, image/jpeg, image/png" />
                </div>
            </div>
        </div>
    )
}

export default UploadFile;