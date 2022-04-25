import React from "react";
// import { Link } from "react-router-dom";
import './Navbar.css';



const Navbar = () => {
    return (
        <div className="topnav">
          <div className="logo">
            <img src="/logo.svg" width="30" height="32" alt="logo" />
            <a href="#TenRun" className="logo-title">TenRun</a>
          </div>
          {/* <div className="topnav-right">
            <Link className="title-nav" text="create-exercise" to="/">Create Exercise</Link>
            <Link className="title-nav" text="exercise-list" to="/exercise-list">Exercise</Link>
          </div> */}
        </div>
    )
}

export default Navbar;

