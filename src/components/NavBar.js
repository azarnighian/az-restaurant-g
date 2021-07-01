import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    // Learned from here: https://www.youtube.com/watch?v=gXkqy0b4M5g&t=837s
    <nav>
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div> 

        <h1 className="logo">RESTAURANT</h1>        

        <ul className="nav-links">
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