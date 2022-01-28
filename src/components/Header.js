import React from 'react';
import Input from './Input';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const surname = props.surname || null;
    const src = props.src || null;
    const alt = surname.match(/[а-яё]\./igm).join('') || null;
    const sidebar = useSelector(state => state.sidebar.value);

    return <header className="header">
        <div className={sidebar ? 'leftShift' : 'rightShift'}>
      <Input type="text" placeholder="Поиск..."/>
      </div>
      <Link to="#" className="user">
        <p className="user__surname">{surname}</p>
        <div className="user__avatar">{src ? <img scr={src} alt={alt}/>  : <h4>{alt}</h4>}</div>
      </Link>
  </header>
}
