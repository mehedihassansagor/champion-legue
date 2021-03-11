import React from 'react';
import img from '../img/Rectangle 28.png'
import './Header.css'

const Header = () => {
    
    return (
        <div  className = 'image'>    
        <h2>Champion league</h2>
                <img  src = {img}/>
        </div>
    );
};

export default Header;