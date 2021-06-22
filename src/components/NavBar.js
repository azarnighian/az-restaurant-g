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
                <a href="https://www.google.com/">Home</a>
            </li>                    
            <li>
                <a href="https://www.google.com/">About</a>
            </li>
            <li>
                <a href="https://www.google.com/">Menu</a>
            </li>
            <li>
                <a href="https://www.google.com/">Gallery</a>
            </li>
            <li>
                <a href="https://www.google.com/">Contact</a>
            </li>
        </ul>            
    </nav>
  )
}

export default NavBar