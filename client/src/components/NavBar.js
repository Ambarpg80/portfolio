import React from 'react';
import {NavLink } from 'react-router-dom';
import logo from '../images/CODE_Screenshot_small.png'

function NavBar(){
    return(
        <nav>
          <NavLink> <img id="logo" src={logo} alt="code"/></NavLink>
            <NavLink id="link1" to="/about" >About</NavLink>
            <NavLink id="link2" to="/demos" >Demos</NavLink>
            <NavLink id="link3" to="/blog" >Blog</NavLink>
            <NavLink id="link4" to="/contact" >Contact</NavLink>
        </nav>
    )
}
export default NavBar;