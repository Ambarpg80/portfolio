import React, {useState} from 'react';
import {NavLink } from 'react-router-dom';
import logo from '../images/CODE_Screenshot_small.png'

function NavBar(){
   
    return(
        <div id="navlinks">
          <NavLink to="/"> <img id="logo" src={logo} alt="code" /></NavLink>
            {/* <NavLink  id="link4" to="/contact_me" >Contact Me</NavLink> */}
            <NavLink  id="link3" to="https://ambarindev.wordpress.com/blog/">WP-Blog</NavLink>
            <NavLink  id="link2" to="/demos">Projects</NavLink>
            <NavLink  id="link1" to="/about">About</NavLink>
        </div>
    )
}
export default NavBar;