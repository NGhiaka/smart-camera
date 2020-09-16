import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Introduce() {
  return (
    <div className="introduce pt-5">
      <div className="container">
        <div className="text-center py-5">
          <div className="sub-title">Our features</div>
          <div className="title-wrapper position-relative"> 
            <span className="title">What we do for you</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="feature-item py-4 px-5 w-50 mr-3 text-center">
            <div className="feature-icon"><FontAwesomeIcon icon="smile" /></div>
            <div className="feature-title mb-3 mt-1">Nhận dạng khuôn mặt</div>
            <div className="feature-content">Tự động xác định hoặc nhận dạng một người nào đó từ một bức ảnh hoặc từ webcam của bạn. Tuy nhiên để hệ thống biết được người đó là ai, trước tiên bạn cần cung cấp thông tin của người đó cho hệ thống</div>
          </div>
          <div className="feature-item py-4 px-5 w-50 ml-3 text-center">
            <div className="feature-icon"> <FontAwesomeIcon icon="object-group" /></div>
            <div className="feature-title mb-3 mt-1">Nhận dạng đối tượng</div>
            <div className="feature-content">Tự động nhận và xác định các đối tượng có trong bức ảnh, một số đối tượng có thể nhận dạng như phương tiện giao thông, một số đồ dùng nội thất, một số loài chim ...</div>
          </div>
        </div>
        {/* <ul className="feature">
          <li className="feature-item">
            <div className="feature-icon"><FontAwesomeIcon icon="smile" /></div>
            <div className="feature-title">Nhận dạng khuôn mặt</div>
            <div className="feature-content">Tự động xác định hoặc nhận dạng một người nào đó từ một bức ảnh hoặc từ webcam của bạn. Tuy nhiên để hệ thống biết được người đó là ai, trước tiên bạn cần cung cấp thông tin của người đó cho hệ thống</div>
          </li>
          <li className="feature-item">
            <div className="feature-icon"> <FontAwesomeIcon icon="object-group" /></div>
            <div className="feature-title">Nhận dạng đối tượng</div>
            <div className="feature-content">Tự động nhận và xác định các đối tượng có trong bức ảnh, một số đối tượng có thể nhận dạng như phương tiện giao thông, một số đồ dùng nội thất, một số loài chim ...</div>
          </li>
        </ul> */}
      </div>
    </div>
  )
}