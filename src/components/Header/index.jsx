import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    const menuItems = [
      {
        id: 1,
        name: 'filmPortal',
        link: '/',
      },
      {
        id: 2,
        name: 'todoTestTask',
        link: '/todoTestTask',
      },
    ];

    return (
      <div className="header">
        <div className="header--menu_container">
          {
            menuItems.map(item => (
              <NavLink
                exact
                key={item.id}
                className="header--menu_item"
                activeClassName="header--menu_item_active"
                to={item.link}
              >
                {item.name}
              </NavLink>
            ))
          }
        </div>
      </div>
    );
  }
}
