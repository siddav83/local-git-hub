import React from 'react';
import { NavLink } from 'react-router-dom';
// import BackButton from '../BackButton';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink  className="link" to="/repo">Overiew</NavLink>
            <NavLink  className="link" to="/repo">Repositories</NavLink>
            <NavLink  className="link" to="/search">Projects</NavLink>
            <NavLink  className="link" to="/search">Packages</NavLink>
            <NavLink  className="link" to="/search">Stars</NavLink>
            {/* <BackButton /> */}
        </nav>
    );
}

export default NavBar;