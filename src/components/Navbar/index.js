import React from 'react';
import { NavLink } from 'react-router-dom';
// import BackButton from '../BackButton';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink  to="/repo">Overiew</NavLink>
            <NavLink  to="/repo">Repositories</NavLink>
            <NavLink  to="/search">Projects</NavLink>
            <NavLink  to="/search">Packages</NavLink>
            <NavLink  to="/search">Stars</NavLink>
            {/* <BackButton /> */}
        </nav>
    );
}

export default NavBar;