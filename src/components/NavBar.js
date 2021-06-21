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
                <a href="#">Home</a>
            </li>                    
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Menu</a>
            </li>
            <li>
                <a href="#">Gallery</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>            
    </nav>
  )
}

export default NavBar