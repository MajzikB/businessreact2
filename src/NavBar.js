import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <ul className="navbar">
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/Mtable">MTable</Link>
            </li>
            <li>
                <Link to="/eTable">eTable</Link>
            </li>
            <li>
                <Link to="/calendar">Calendar</Link>
            </li>
        </ul>
    );
}

export default NavBar;