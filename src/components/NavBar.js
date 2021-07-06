import { NavLink } from "react-router-dom";
import '/Users/azarnighian/Desktop/az-restaurant/src/navBar.css';
import '/Users/azarnighian/Desktop/az-restaurant/src/navBarStuff.js';

const NavBar = () => {   
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
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>                    
            <li>
                <NavLink exact activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="active" to="/menu">Menu</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="active" to="/gallery">Gallery</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
            </li>
        </ul>            
    </nav>
  )
}

export default NavBar