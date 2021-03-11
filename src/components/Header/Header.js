import React from 'react';
import banner from '../../data/Photo/banner.jpg';

import './Header.css'

const Header = () => {
    return (
        <header>
            <img src={banner} alt=""/>
            <div className="header">
                <h1 className="text">English Premier League</h1>
                {/* <img src={banner} alt="" />
                <h1>English Premier League</h1> */}
            </div>
        </header>
    );
};

export default Header;