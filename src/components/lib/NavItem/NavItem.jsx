import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

function NavItem(props) {
    let className = "navigation-item"
    className = props.wrapperClass != null ?  props.wrapperClass + ` ${className}`: className

    const link = props.link == null ? "/" : props.link

    const clickHandler = () =>{
        if(props.onClick != null){
            props.onClick()
        }
        
    }

    return (
        <div className={className} onClick={clickHandler}>
            <Link to={link} className='navigation-item__link'>
                {props.children}
            </Link>
            
        </div>
    );
}

export default NavItem;