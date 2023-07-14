import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// import TextArea from "./TextArea";



export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link" >To Do List</Link>
              </li>
            </ul>
            <form className="d-flex">
            <div className={`form-check form-switch testing text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.textMode}`} htmlFor="flexSwitchCheckDefault">Enable {`${props.mode === 'light'?'dark':'light'}`} Mode</label>
            </div>
            </form>
          </div>
        </div>
      </nav> 
    )
}

PropTypes.propTypes = {
    title: PropTypes.string.isRequired,
  };
