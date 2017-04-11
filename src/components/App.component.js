import React from 'react';

const App = () => (
  <div className="container-fluid" style={{ backgroundColor: 'grey' }} data-spy="scroll" data-target=".navbar" data-offset="10" >
    <NavBar />
    <Body />
    <Footer />
    <FooterCopyRight />
  </div>
);

export default App;
