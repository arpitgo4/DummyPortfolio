import React from 'react';

const Banner = () => (
  <div id="about" style={{ backgroundColor: '#aaa', paddingTop: '9%', paddingBottom: '7%' }} className="row">
    <div style={{ fontSize: '1.4em', color: 'white', textAlign: 'right' }} className="col-md-8 col-md-offset-0">
      <p>Front-End Developer and UX/UI designer, with practical experience <br /> in project management, branding strategy, and creative direction; <br /> devoted to functional programming and information architecture.</p>
      <div className="row" style={{ marginTop: '5%' }}>
        <div className="col-md-7 col-md-offset-2" style={{ backgroundColor: 'white', width: '72.5%', height: '5px' }}>&nbsp;</div>
        <div className="col-md-1" style={{ position: 'relative', bottom: '16px' }}><i style={{ fontSize: '1.7em' }} className="fa fa-code"></i></div>
      </div>
      <p style={{ fontSize: '1.1em' }}>Web Developer - User Experience Designer - Graphic Artist</p>
    </div>
    <div style={{ width: '25%', height: 'auto' }} className="col-md-2 col-md-offset-0">
      <img style={{ position: 'relative', bottom: 55 }}src="http://qlip.in/images/avatar.jpg" className="img-responsive img-circle" />
    </div>
  </div>
);

export default Banner;