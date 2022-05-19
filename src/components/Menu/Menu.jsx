import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";

function Menu() {
  return (
    <div className="menu-list">
      <div className="menu-list__item">
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
      </div>
    </div>
  );
}

export default Menu;
