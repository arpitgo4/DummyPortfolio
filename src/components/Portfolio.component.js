import React from 'react';
import { textColor, lighterTextColor } from './InfoContainer.component';
import { HeaderTitle, HeaderDecoration } from './Header.component';

const Portfolio = () => (
  <div className="row" id="portfolio" style={{ backgroundColor: '#ddd', color: textColor, fontWeight: 'bold', borderBottom: `2px solid ${lighterTextColor}` }}>
    <div style={{ marginTop: '4%'}} >
     <div className="col-md-12">
       <HeaderTitle title="portfolio" />
       <HeaderDecoration />   
     </div>
    </div>
    <div className="row" style={{ marginBottom: '5%' }}>
      <div className="col-md-5 col-md-offset-1"><img className="img-responsive" src="http://qlip.in/images/YMCA-Realtor-Donation-3.jpg" /></div>
      <div className="col-md-5 col-md-offset-0"><img className="img-responsive" src="http://qlip.in/images/webcaballero.jpg" /></div>
    </div>
    <div className="row" style={{ marginBottom: '5%' }}>
      <div className="col-md-5 col-md-offset-1" ><img src="http://qlip.in/images/webmarqas.jpg" className="img-responsive" /></div>
      <div className="col-md-5 col-md-offset-0"><img src="http://qlip.in/images/webbrandaxis.jpg" className="img-responsive" /></div>
    </div>
    <div className="row" style={{ marginBottom: '5%' }}>
      <div className="col-md-5 col-md-offset-1"><img src="http://qlip.in/images/panacea1.jpg" className="img-responsive" /></div>
      <div className="col-md-5 col-md-offset-0"><img src="http://qlip.in/images/webgatomalo.jpg" className="img-responsive" /></div>
    </div>
  </div>
);

export default Portfolio;