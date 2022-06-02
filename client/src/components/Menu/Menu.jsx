import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getMenu } from "../../fetchList";
import "./menu.scss";

function Menu() {
  const [error, setError] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu()
      .then(
        (result) => {
          setMenu(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else {
    return (
      <div className="menu-list">
        {menu.map(item => {
          return (
            <div className="menu-list__item">
              <NavLink to={item.nameeng}>{item.namerus}</NavLink>
            </div>
          );
        })}
        {/* <div className="menu-list__item">
          <NavLink to="/about">категории</NavLink>
        </div>
        <div className="menu-list__item">
          <NavLink to="/about">о нас</NavLink>
        </div>
        <div className="menu-list__item active">
          <NavLink to="/pearl">жемчуг</NavLink>
        </div>
        <div className="menu-list__item">
          <NavLink to="/quality">качество</NavLink>
        </div>
        <div className="menu-list__item">
          <NavLink to="/pay">оплата</NavLink>
        </div>
        <div className="menu-list__item">
          <NavLink to="/actions">акции</NavLink>
        </div>
        <div className="menu-list__item">
          <NavLink to="/delivery">доставка</NavLink>
        </div>
        <div className="menu-list__item">
          <NavLink to="/contactsPage">контакты</NavLink>
        </div> */}
      </div>
    );
  }
}

export default Menu;
