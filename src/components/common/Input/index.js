import React, {memo}  from 'react';
import './Input.scss';

const Input = ( {className, text, onClick} ) => {
  return (
    <input className={className} value={text} onClick={onClick} />
  );
};

export default memo(Input);