import React from 'react';
import st from './Button.module.css';

const Button = ({titulo, cb, color}) => {
  return (
    <div className={st.btns}>
        <button onClick={cb} style={{color: color}}>{titulo}</button>
    </div>
  )
};

export default Button;
