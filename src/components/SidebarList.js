import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarList(props) {
    const linkName = props.linkName;
    const linkImg = props.linkImg || null;
  return <Link to="#" className="list__link">
      <div className="list__img">{ linkImg ? <img src={linkImg} alt="image"/> : null }</div>
      <h4>{linkName}</h4>
  </Link>
}
