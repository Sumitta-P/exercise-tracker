import React from "react";
import './Navbar.css';



const Navbar = () => {
    return (
        <div className="topnav">
          <div className="logo">
            <img src="/logo.svg" width="30" height="32" alt="logo" />
            <a href="#TenRun" className="logo-title">TenRun</a>
          </div>
        </div>
    )
}

export default Navbar;

