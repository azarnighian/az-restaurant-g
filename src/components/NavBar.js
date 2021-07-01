import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
    // See 1:46:15 of here: https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=621s

const NavBar = () => {
  const location = useLocation()
    
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
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            </li>
            <li>
                <Link to="/menu" className={location.pathname === "/menu" ? "active" : ""}>Menu</Link>
            </li>
            <li>
                <Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link>
            </li>
            <li>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </li>
        </ul>            
    </nav>
  )
}

export default NavBar