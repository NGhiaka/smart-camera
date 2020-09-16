import React from "react";
import {
  NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (    
    <nav className="navbar navbar-expand-sm position-fixed w-100 py-0">
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
    
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <NavLink className="d-flex flex-column align-items-center pt-2 pb-1" exact activeClassName="active" to="/">
              <FontAwesomeIcon size="lg" icon="home" />
              <span className="mt-1">Home</span>
            </NavLink>
          </li>         
          <li className="nav-item">
            <NavLink className="d-flex flex-column align-items-center pt-2 pb-1" activeClassName="active" to="/introduce">
              <FontAwesomeIcon size="lg" icon="info-circle" />
              <span className="mt-1">Introduce</span>
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="d-flex flex-column align-items-center pt-2 pb-1" activeClassName="active" to="/camera">
              <FontAwesomeIcon size="lg" icon="camera-retro" />
              <span className="mt-1">Smart Camera</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="d-flex flex-column align-items-center pt-2 pb-1" activeClassName="active" to="/team">
              <FontAwesomeIcon size="lg" icon="users" />
              <span className="mt-1">Team</span>
            </NavLink>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  )
}