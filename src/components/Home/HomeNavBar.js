import { Link } from "react-router-dom";
import '/Users/azarnighian/Desktop/az-restaurant/src/landingNavBar.css';
import '/Users/azarnighian/Desktop/az-restaurant/src/landingNavBarStuff.js';

const NavBar = () => {   
  return (
    // Learned from here: https://www.youtube.com/watch?v=gXkqy0b4M5g&t=837s
    <nav className="landingNavBar">
        <div className="landingBurger">
            <div className="landingLine1"></div>
            <div className="landingLine2"></div>
            <div className="landingLine3"></div>
        </div> 

        <h1 className="landingLogo">RESTAURANT</h1>        

        <ul className="landingNavLinks">
            <li>
                <Link to="/">Home</Link>
            </li>                    
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/menu">Menu</Link>
            </li>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>            
    </nav>
  )
}

export default NavBar