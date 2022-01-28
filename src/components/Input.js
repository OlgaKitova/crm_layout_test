import React from 'react';

export default function Input(props) {
    const placeholder = props.placeholder;
    const type = props.type;
  return <div>
      <input className="input" type={type} placeholder={placeholder}/>
  </div>
}
