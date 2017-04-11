import React from 'react';
import { textColor } from './InfoContainer.component';
import { HeaderTitle, HeaderDecoration } from './Header.component';
import FormField from './FormField.component';

const Contact = () => (
  <div className="row" style={{ backgroundColor: '#ddd', paddingBottom: '3%' }}>
    <div id="contact" style={{ marginTop: '4%' }}className="row">
      <HeaderTitle title="contact me"/>
      <HeaderDecoration />
    </div>
    <div className="row">
      <div className="col-xs-5 col-xs-offset-1">
        <form action="javascript:void(0)">
          <div className="row">
            <div className="col-xs-12">
              <FormField placeholder="Name" />
              <FormField placeholder="Email Address" />
              <FormField placeholder="Phone Number" />
              <FormField placeholder="Message" type="password" />
              <button style={{ color: textColor, fontSize: 20 }}>Send</button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ marginTop: '3%', fontSize: 20, color: textColor, width: '35%' }} className="col-xs-4 col-xs-offset-1">
        <p>Want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, tips on how to solve your sudoku, random questions about the universe and the meaning of life, or even if only for some nice Fika here in stunning Toronto... just feel free to drop me a line anytime.</p>
        <p>I promise to reply A.S.A.P.</p>
        <p style={{ marginTop: '20%'}}>Note: No spam/soliciting pour moi, merci --- Smiley here ----</p>
      </div>
    </div>
  </div>
);

export default Contact;