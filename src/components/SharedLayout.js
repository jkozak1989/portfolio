import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

import "./SharedLayout.css";

const SharedLayout = () => {

    const [websiteMode,setWebsiteMode] = useState('DARK');

    let switchStyle = {};
    if (websiteMode === 'DARK') {
        switchStyle = {'transform': 'translateX(0px)'};
        document.documentElement.style.setProperty('--bgcolor', '#051622');
        document.documentElement.style.setProperty('--primary', '#1BA098');
        document.documentElement.style.setProperty('--secondary', '#DEB992');
        document.documentElement.style.setProperty('--code', '#ffffff');
    } else {
        switchStyle = {'transform': 'translateX(55px)'};
        document.documentElement.style.setProperty('--bgcolor', '#E8EAE3');
        document.documentElement.style.setProperty('--primary', '#373833');
        document.documentElement.style.setProperty('--secondary', '#FA2742');
        document.documentElement.style.setProperty('--code', '#000000');
    }

    function handleChangeMode() {
        setWebsiteMode(prevMode => {
            return prevMode === 'DARK' ? 'LIGHT' : 'DARK';
        })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <div className='website-mode'>
                <button style={switchStyle} className='website-mode-switch' onClick={handleChangeMode}>{websiteMode}</button>
            </div>
        </>
        
    );
}

export default SharedLayout;