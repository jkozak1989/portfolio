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
                <a href='https://github.com/jkozak1989'><i className="bi bi-github"></i></a>
                <a href='https://www.linkedin.com/in/jaroslaw-kozak-0156a11a3/'><i className="bi bi-linkedin"></i></a>
            </div>
        </div>
    );
}

export default Navbar;