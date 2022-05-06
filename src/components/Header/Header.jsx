import React from 'react';
import { NavLink } from 'react-router-dom';
import Socials from '../Socials';
import Menu from '../Menu';
import Phone from '../Phone';
import Cart from '../Cart';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import './header.scss';

//function Header(props) {
class Header extends React.Component {

    onOpenCall = (value) => {
        //props.onOpenCall(props);
        this.setState({
            name: value
        })
        //console.log(this.props);
    };

    onOpenMenuMobile = () => {
        //props.onOpenMenuMobile();
    };
    onOpenMenuMobile;

    render() {
        return (
            <div className="header">
                <div className="header__info">
                    <div className="header__info-container">
                        <div className="header__info-socials">
                            <Socials/>
                        </div>
                        <div className="header__info-block">
                            <div className="header__info-block-left">
                                <Phone onOpenCall={this.onOpenCall} />
                            </div>
                            <div className="header__info-block-right">
                                <div className="header__info-block-right-search">
                                    <SearchIcon/>
                                </div>
                                <div className="header__info-block-right-cart">
                                    <Cart/>
                                </div>
                                <div className="header__info-block-right-mobile-menu">
                                    <MenuIcon onClick={this.onOpenMenuMobile} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__logo">
                    <NavLink to="/mainPage">
                        <LogoIcon/>
                    </NavLink>
                </div>
                <div className="header__menu">
                    <Menu/>
                </div>
            </div>
        )
    }
}

export default Header;
