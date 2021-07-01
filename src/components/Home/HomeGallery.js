import { Link } from 'react-router-dom'

import image1 from './images/pexels-anna-tis-6341164.jpg';
import image2 from './images/pexels-asad-photo-maldives-1449773.jpg';

const HomeGallery = () => {
  return (
    <div className="container beigeBackground">        
        <h1>Gallery</h1>
        <div className="homeGalleryContainer">
            <img src={image1} alt="Homepage Gallery 1"></img>
            <img src={image2} alt="Homepage Gallery 2"></img>            
        </div>        
        <Link to="/gallery" className="linkButton">GALLERY</Link>
    </div>
  )
}

export default HomeGallery