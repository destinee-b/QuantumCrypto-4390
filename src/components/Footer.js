import '../css/Footer.css';
import logo from '../images/Logo.png';
import React from 'react';

function Footer() {
    return (
        <footer>
            <div className='footer-logo'>
                <img id='logo' src={logo} alt='logo'/>

            </div>
            <div className='footer-links'>

            </div>
        </footer>
    );
}

export default Footer;