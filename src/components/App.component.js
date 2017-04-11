import React from 'react';
import NavBar from './NavBar.component';
import Body from './InfoContainer.component';
import Footer, { FooterCopyRight } from './Footer.Component';

const App = () => (
  <div className="container-fluid" style={{ backgroundColor: 'grey' }} data-spy="scroll" data-target=".navbar" data-offset="10" >
    <NavBar />
    <Body />
    <Footer />
    <FooterCopyRight />
  </div>
);

export default App;
