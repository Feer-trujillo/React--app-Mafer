import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
function Navbar({ links }) {
    return (
        <nav className="nav-container">
            <h2 className="nav-title">My App</h2>
            <ul className="nav-links">
                {links.map(link => (
                    <li key={link.id}>
                        <Link to={link.href}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
