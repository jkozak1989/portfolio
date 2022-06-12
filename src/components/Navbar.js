import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src='logo.svg' className='navbar-logo'/>
            <nav>
                <NavLink to="/" className='nav-item'><i className="bi bi-house-door-fill"></i> Home</NavLink>
                <NavLink to="about" className='nav-item'><i className="bi bi-person-fill"></i> About</NavLink>
                <NavLink to="portfolio" className='nav-item'><i className="bi bi-briefcase-fill"></i> Portfolio</NavLink>
                <NavLink to="contact" className='nav-item'><i className="bi bi-envelope-fill"></i> Contact</NavLink>
            </nav>
            <div className='navbar-icons'>
                <div><i className="bi bi-github"></i></div>
                <div><i className="bi bi-linkedin"></i></div>
            </div>
        </div>
    );
}

export default Navbar;