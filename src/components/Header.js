import '../css/Header.css';
import logo from '../images/Logo.png';
import React from 'react';

function Header() {
    return (
        <header>
            <nav className='nav-bar'>
                <img id ='logo' src ={logo} alt ="logo"/>
                <ul>
                    <li><a href="Portfolio">Portfolio</a></li>
                    <li><a href="Community">Community</a></li>
                    <li><a href="NFTs">NFTs</a></li>
                    <li><button>Sign Up</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;