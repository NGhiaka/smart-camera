import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import lvnAvar from '../../assets/images/lvn.png';
import lpnAvar from '../../assets/images/lpn.png';
import htcAvar from '../../assets/images/htc.jpeg';
import {  faFacebookF , faGoogle, faGit} from '@fortawesome/free-brands-svg-icons';
export default function Team() {
  return (
    <div className="team py-5">
      <div className="container">
        <div className="text-center py-5">
          <div className="sub-title">Welcome</div>
          <div className="title-wrapper position-relative"> 
            <span className="title">Meet the team</span>
          </div>
        </div>
        <div className="team-content">
        <div className="row">
          <div className="col-4">
            <div className="member">
              <div className="member-wrapper">
                <div className="member-info">
                  <div className="member-avatar">
                    <img src={lvnAvar} alt="" className="img-responsive"/>
                  </div>
                  <span className="member-name">Lam Vi Ni</span>
                  <div className="member-job">System Admin</div>
                  <div className="member-email">lamvini.hcmus@gmail.com</div>
                  <div className="member-desctiption">I am system admin of this system. Technical: Docker, CI/CD, Kubernet</div>
                </div>
              </div>
              <div className="member-socials mt-3">
                <a href="#" className="facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="google">
                <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="git">
                <FontAwesomeIcon icon={faGit} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="member">
              <div className="member-wrapper">
                <div className="member-info">
                  <div className="member-avatar">
                    <img src={lpnAvar} alt="" className="img-responsive"/>
                  </div>
                  <span className="member-name">Le Phuoc Nghia</span>
                  <div className="member-job">Back-end</div>
                  <div className="member-email">nghiacntt09@gmail.com</div>
                  <div className="member-desctiption">I am back-end developer of this system. Technical: Python, AI, API</div>
                </div>
              </div>
              <div className="member-socials mt-3">
                <a href="#" className="facebook">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="google">
                <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="git">
                <FontAwesomeIcon icon={faGit} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="member">
              <div className="member-wrapper">
                <div className="member-info">
                  <div className="member-avatar">
                    <img src={htcAvar} alt="" className="img-responsive"/>
                  </div>
                  <span className="member-name">Ho Thi Chinh</span>
                  <div className="member-job">Front-end</div>
                  <div className="member-email">tuyetchinh1996@gmail.com</div>
                  <div className="member-desctiption">I am front-end developer of this system. Technical: HTML/CSS, Bootstrap, Reactjs</div>
                </div>
              </div>
              <div className="member-socials mt-3">
                <a href="#" className="facebook">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="google">
                <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="git">
                <FontAwesomeIcon icon={faGit} />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}