import React, { Fragment } from 'react';

export default function SidebarList(props) {
    const linkName = props.linkName;
    const linkImg = props.linkImg || null;
  return <Fragment>
      <div className="list__img">{ linkImg ? <img src={linkImg} alt="image"/> : null }</div>
      <h4>{linkName}</h4>
  </Fragment>
}
