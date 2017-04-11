import React from 'react';

const NavBar = () => (
  <nav id="myscroll" className="navbar navbar-fixed row navbar-fixed-top" style={{ backgroundColor: 'purple', paddingTop: '1%', paddingBottom: '1%', boxShadow: '0 8px 6px -6px #555' }}>
    <div className="col-md-7 col-md-offset-1">
      <img style={{ width: '7%', height: 'auto' }} src="http://qlip.in/images/qlip.png" className="img-responsive" />
    </div>
    <ul className="nav navbar-nav">
      <li><a id="nav-about" href="#about">ABOUT</a></li>
       <li><a id="nav-portfolio" href="#portfolio">PORTFOLIO</a></li>
       <li><a id="nav-contact" href="#contact">CONTACT</a></li>
    </ul>
  </nav>
);

export default NavBar;