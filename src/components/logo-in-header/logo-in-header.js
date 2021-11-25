import React from 'react';

import './logo-in-header.css';
const LogoInHeader = () => {

        return(
        <div className="logo-main-navbar">
            <div className="two-squares-navbar">
                <div className="square-navbar"></div>
                <div className="square-navbar"></div>
            </div>
            <div className="hebron-logo-navbar">
                <span>HEBRON</span>
            </div>
            <div className="logo-text-navbar">
                <span>Education charity</span>
                <span>Organization</span>
            </div>
        </div>);
    
}

export default LogoInHeader;