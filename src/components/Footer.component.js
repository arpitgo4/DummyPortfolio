import React from 'react';
import { lighterTextColor } from './InfoContainer.component';

const Footer = () => (
    <div className="row" style={{ backgroundColor: lighterTextColor, boxShadow: '0px -4px 1px -6px #999' }}>
      <div className="col-xs-3 col-xs-offset-2" style={{ color: 'white', textAlign: 'center', marginTop: '5%', marginBottom: '5%' }}>
        <p style={{ fontWeight: 'bold', fontSize: 23 }} >ABOUT THIS PAGE</p>
        <p style={{ fontSize: 19, marginTop: '10%' }}>Made with <i className="fa fa-coffee" /> and <i className="fa fa-music" /> <br />
          by <span id="author-name" style={{ color: 'purple' }}>Arpit Goyal</span>.</p>
      </div>
      <div className="col-xs-3 col-xs-offset-2" style={{ color: 'white', marginTop: '5%', marginBottom: '5%'  }}>
        <p style={{ fontWeight: 'bold', fontSize: 23 }} >AROUND THE WEB</p>
        <p style={{ marginTop: '10%', marginLeft: '-2%' }}>
          <FooterIcon faIcon="linkedin" href="https://www.linkedin.com/in/arpit-goyal-6b094078/" />
          <FooterIcon faIcon="github" href="https://github.com/arpitgo4" />
          <FooterIcon faIcon="twitter" />
          <FooterIcon faIcon="flickr" />
        </p>
      </div>
    </div>
);

const FooterCopyRight = () => (
  <div className="row" style={{ backgroundColor: 'purple' }}>
      <div className="col-xs-12">
        <p className="text-center" style={{ fontSize: 19, color: 'white', marginTop: '2%', marginBottom: '2%' }}>qlip &copy; 2017. All Rights Reserved</p>
      </div>
    </div>
);

const FooterIcon = ({ faIcon, href }) => (
  <a href={href} target="_blank" className="footer-icon" style={{ color: 'white', display: 'inline-block', marginLeft: '1%', marginRight: '1%' }}>
    <div style={{ borderRadius: '50%', width: 50, height: 50, border: '2px solid' }}>
      <i className={`fa fa-${faIcon}`} style={{ fontSize: 20, position: 'relative', left: 13, top: 13 }}></i>
    </div>
  </a>
);

export default Footer;

export { FooterCopyRight };