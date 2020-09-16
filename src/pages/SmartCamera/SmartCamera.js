import React from "react";

export default function SmartCamera() {
  return (
      <div className="camera">
        <h4 className="title text-center">Title Title Title</h4>
        <div className="form-input d-flex justify-content-between align-items-center mx-auto">
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
                            <span className="ml-3">Drag &amp; drop an image here</span>
                        </div>
                        <input type="file" id="uploadImg" title="" onchange="readUrl(this)" accept="image/jpg, image/jpeg, image/png" />
                    </div>
                </div>
            </div>
            <div id="select-option" className="select-wrap position-relative">
                <div className="selected-option position-relative"><span className="placeholder" id="filter-value" data-option="0">Select API</span>
                    <ul className="options">
                        <li data-value="1">Nhận dạng khuôn mặt</li>
                        <li data-value="2">Nhận dạng đối tượng</li>
                    </ul>
                </div>
            </div>
            <div className="action">
                <button id="btn-search" onclick="">Ok</button>
            </div>
        </div>        
      </div>

  )
}