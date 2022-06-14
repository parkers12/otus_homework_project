import React from "react";
import { NavLink } from "react-router-dom";

import Socials from "../Socials";
import Menu from "../Menu";
import Phone from "../Phone";
import Cart from "../Cart";
import SearchIcon from "../../assets/images/icons/search.svg";
import MenuIcon from "../../assets/images/icons/menu.svg";
import LogoIcon from "../../assets/images/icons/logo.svg";
import "./header.scss";

// function Header(props) {
function Header() {
  const onOpenCall = (value) => {
    // props.onOpenCall(props);
    this.setState({
      name: value,
    });
    // console.log(this.props);
  };

  const onOpenMenuMobile = () => {
    // props.onOpenMenuMobile();
  };

  return (
    <div className="header">
      <div className="header__info">
        <div className="header__info-container">
          <div className="header__info-socials">
            <Socials />
          </div>
          <div className="header__info-block">
            <div className="header__info-block-left">
              <Phone onOpenCall={onOpenCall} />
            </div>
            <div className="header__info-block-right">
              <div className="header__info-block-right-search">
              {/* <SearchIcon /> */}
                <img src={SearchIcon} />
              </div>
              <div className="header__info-block-right-cart">
                <Cart />
              </div>
              <div className="header__info-block-right-mobile-menu">
                {/* <MenuIcon onClick={onOpenMenuMobile} /> */}
                <img src={MenuIcon} onClick={onOpenMenuMobile} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__logo">
        <NavLink to="/">
          {/* <LogoIcon /> */}
          <img src={LogoIcon} onClick={onOpenMenuMobile} />
        </NavLink>
      </div>
      <div className="header__menu">
        <Menu />
      </div>
    </div>
  );
}

export default Header;
