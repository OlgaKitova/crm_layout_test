import React from 'react';
import Input from './Input';
import { useSelector } from 'react-redux';

export default function Header() {
    const sidebar = useSelector(state => state.sidebar.value);
  return <header className={sidebar ? 'leftShift' : 'rightShift'}>
      <Input type="text" placeholder="Поиск..."/>
  </header>
}
