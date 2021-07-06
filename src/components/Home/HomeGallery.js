import { Link } from 'react-router-dom'

import image1 from '/Users/azarnighian/Desktop/az-restaurant/src/components/galleryImages/pexels-daria-shevtsova-704982.jpg';
import image2 from '/Users/azarnighian/Desktop/az-restaurant/src/components/galleryImages/pexels-maria-orlova-4947288.jpg';

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