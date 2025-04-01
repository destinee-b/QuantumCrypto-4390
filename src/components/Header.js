import '../css/Header.css';
import logo from '../images/Logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className='nav-bar'>
                <Link to="/">
                    <img id='logo' src={logo} alt="logo" />
                </Link>
                <ul>
                    <li><a href="Community">Community</a></li>
                    <li><a href="NFTs">NFTs</a></li>
                    <li><Link to="/tax-guide">Tax Guide</Link></li>
                    <li><Link to="/graph">Graph</Link></li> {/* New link */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;