import React from 'react';
import { textColor } from './body.component';

const HeaderDecoration = () => (
  <div className="row">
      <div style={{ marginTop: '2%', marginLeft: '2%' }} className="col-xs-12">
        <div className="col-xs-5 col-xs-offset-3" style={{ backgroundColor: textColor, width: '20%', height: '5px' }}>&nbsp;</div>
        <div className="col-xs-1" style={{ width: '5.2% ', paddingLeft: '0.7%' }}> 
          <i style={{ dispaly: 'inline', fontSize: 40, color: textColor, position: 'relative', bottom: '19px' }} className="fa fa-code" /></div>
        <div className="col-xs-5" style={{ backgroundColor: textColor, width: '20%', height: '5px' }}>&nbsp;</div>
      </div>    
    </div>
);

const HeaderTitle = ({ title }) => (
  <h3 style={{ textTransform: 'uppercase', fontWeight: 'bold', color: textColor, fontSize: 30 }} className="text-center col-xs-12">{ title }</h3>
);  

export default { HeaderDecoration, HeaderTitle };