import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar-logo'>
                <svg width="100%" viewBox="0 0 100 100" height="100%" src='logo.svg'>
                    <g transform="matrix(1,0,0,1,15.5389,9.82986)">
                        <text x="-0.555px" y="46.667px" style={{'fontFamily':'Courier','fontSize':'66.667px'}}>J</text>
                    </g>
                    <g transform="matrix(1,0,0,1,42.7113,9.82986)">
                        <text x="-0.555px" y="46.667px" style={{'fontFamily':'Courier','fontSize':'66.667px'}}>K</text>
                    </g>
                    <g transform="matrix(1,0,0,1,-0.0844655,21.2026)">
                        <text x="4.244px" y="58.638px" style={{'fontFamily':'Courier','fontSize':'30.556px'}}>codes</text>
                    </g>
                </svg>
            </div>
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