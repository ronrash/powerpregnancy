import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pregnancy-tips">Pregnancy Tips</Link></li>
                <li><Link to="/diet">Diet</Link></li>
                <li><Link to="/medical-conditions">Medical Conditions</Link></li>
                <li><Link to="/journal">Journal</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
