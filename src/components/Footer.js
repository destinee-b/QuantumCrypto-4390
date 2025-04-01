import '../css/Footer.css';
import logo from '../images/Logo.png';
import React from 'react';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img id="logo" src={logo} alt="logo" />
            </div>
            <div className="footer-links-container">
                <div className="footer-links">
                    <ul>
                        <li><a href="Community">Marketplace</a></li>
                        <li><a href="NFTs">NFTs</a></li>
                        <li><a href="Raffles">Raffles</a></li>

                    </ul>
                    <ul>
                    <li><a href="About_Us">About Us</a></li>
                        <li><a href="News">News</a></li>
                        <li><a href="Tax_Guide">Tax Guide</a></li>
                    </ul>
                    <ul>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;