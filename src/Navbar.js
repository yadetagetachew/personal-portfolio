import React from 'react';
import Logo from "./media/yg-logo.gif";

const Navbar = () => {

  return (
    <nav className="navigation topnav">
        <img className="img-fluid " src={Logo} alt="Yadi Inc. logo" />  
    </nav>
  );
}

export default Navbar;
