import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '/Users/azarnighian/Desktop/az-restaurant/src/navBar.css';
import { navBurgerClick } from '/Users/azarnighian/Desktop/az-restaurant/src/navBarStuff.js'


const NavBar = () => {   
  useEffect(() => {
    // https://reactjs.org/docs/hooks-effect.html
    navBurgerClick();
  });

  return (
    // Learned from here: https://www.youtube.com/watch?v=gXkqy0b4M5g&t=837s
    <nav className="navBar">
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div> 

        <h1 className="logo">RESTAURANT</h1>        

        <ul className="navLinks">
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>                    
            <li>
                <NavLink exact activeClassName="currentPage" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="currentPage" to="/menu">Menu</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="currentPage" to="/gallery">Gallery</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="currentPage" to="/contact">Contact</NavLink>
            </li>
        </ul>            
    </nav>
  )
}

export default NavBar