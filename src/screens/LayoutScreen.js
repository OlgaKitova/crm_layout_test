import React from 'react';
import FilterBlock from '../components/FilterBlock';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

export default function LayoutScreen() {
  return (<div> 
      <SideBar />
      <Header surname="Петров В. А."/>
      <FilterBlock/>
  </div>)
}
