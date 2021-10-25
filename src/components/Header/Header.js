import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/shop">
                    Shop
                </NavLink>
                <NavLink to='/inventory'>Manage Inventory</NavLink>
                <NavLink to='/review'>Order Review</NavLink>
                <NavLink to='/register'>Register</NavLink>
                {user.displayName &&<span style={{color:'white'}}>Hello {user.displayName}</span>}
                {user.displayName? <button onClick={logOut}>Log   Out</button> :<NavLink to='/signin'>Sign in</NavLink>}
            </nav>
        </div>
    );
};

export default Header;