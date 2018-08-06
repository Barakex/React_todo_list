import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.scss';

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
      <div className={style.header}>
        <div className={style.menu_container}>
          {
            menuItems.map(item => (
              <NavLink
                exact
                key={item.id}
                className={style.menu_item}
                activeClassName={style.menu_item_active}
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
