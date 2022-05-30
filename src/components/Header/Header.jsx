import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../lib/NavItem/NavItem';
import Title from '../lib/Title/Title';
import logo from '../../image/Logo44.png'
import cart_img from '../../image/cart.png'

import './Header.scss';

function Header(props) {

    const [menuOpen, setMenuOpen] = useState(false)
    const burgerRef = useRef(null)

    let mobileMenuClass = menuOpen ? "menu-open" : "menu-close"
    let mobileMenuBodyClass = menuOpen ? 'menu-body _active' : "menu-body"

    const burgerClick = ()=>{
        setMenuOpen(!menuOpen)
    }
    

    const data = [
    ]

    if (props.auth){
        
    }

    const menuItems = data.map( el => (
        <NavItem key={el.id} link={el.link} wrapperClass="menu__item">{el.title}</NavItem>
    ))

    const mobilemenuItems = data.map( el => (
        <NavItem key={el.id} link={el.link} onClick={burgerClick} wrapperClass="menu__item">{el.title}</NavItem>
    ))

    return (
        <div className='header'>
            <div className='header__container'>
                <div className="header__logo">
                    <Link to='/'>
                        <img src={logo} alt='logo'/>
                    </Link>
                    
                </div>

                <div className="header__menu menu">
                    {menuItems}
                </div>

                <div className='header__cart cart-header'>
                    <img src={cart_img} alt='cart'/>
                </div>

                
                 
            </div>
            
        </div>
    );
}

export default Header;