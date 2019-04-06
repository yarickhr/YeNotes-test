import React, {memo}  from 'react';
import './Button.scss';

const Button = ( {className, text, onClick, children} ) => {

  return (
    <button className={className} title={text} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default memo(Button);