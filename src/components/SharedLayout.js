import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

import "./SharedLayout.css";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </>
        
    );
}

export default SharedLayout;