import React from 'react';

import Logo from './Logo.jsx'
import {useScroll} from '../../hooks/UseScroll.js'

export default function Navbar() {
    const { scrollY, scrollX, scrollDirection } = useScroll();  
    return (
        <div className="navbar-container">
            <nav className={`navbar ${(scrollDirection === "down") ? "active": "hidden"}`}   >
                <Logo black/>
                <button onClick={() => window.location = 'mailto:dojo@dentsucreative.com'}>Dojo with us</button>
            </nav>       
        </div>
    )
}