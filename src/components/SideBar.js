import React from 'react';
import SidebarList from './SidebarList';
import { useSelector, useDispatch } from 'react-redux';
import { hideShowSidebar } from '../reducers/hideSidebar';

const listNameSideBar = ["Главная", "Клиенты", "Сотрудники", "Аналитика"];

export default function SideBar() {
    const showLogoImg = false;
    const sidebar = useSelector(state => state.sidebar.value);
    const dispatch = useDispatch();
  return <nav className={sidebar ? 'sidebar': 'sidebar hide-sidebar'} onMouseEnter={() => {
    dispatch(hideShowSidebar());
    return
  }}>
      <section className="sidebar__header">
          <div className="sidebar__logo">
              {showLogoImg ? <img src="#" alt="LOGO"/> : <h4>Logo</h4>}
          </div>
          <h1>name company</h1>
      </section>
      <ul className="sidebar__list">
            {
                listNameSideBar.map((link, index )=> <li className="sidebar__point" key={link+index}>{<SidebarList linkName={link}/>}</li>)
            }
      </ul>
  </nav>;
}
