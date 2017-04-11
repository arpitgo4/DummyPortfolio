import React from 'react';
import { textColor } from './body.component';

const FormField = ({ placeholder, type }) => (
  <input type={type ? type : 'text'} className="form-control" placeholder={placeholder} style={{ 
      backgroundColor: 'inherit', 
      border: '0px',
      borderBottom: `1px solid ${textColor}`,
      color:textColor,
      fontSize: 30,
      marginTop: '10%',
      marginBottom: '10%',
      boxShadow: 'none'
    }} />
);

export default FormField;