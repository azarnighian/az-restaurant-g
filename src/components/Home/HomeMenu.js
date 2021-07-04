import { Link } from 'react-router-dom'
import image from './homeImages/pexels-tanya-gorelova-3933207.jpg';

const HomeMenu = () => {
  return (
    <div className="splitContainer">        
        <img src={image} alt="Homepage Menu"></img>
        <div className="menuTextContainer">
            <h1>Our Menu</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to="/menu" className="linkButton">MENU</Link>
        </div>        
    </div>
  )
}

export default HomeMenu