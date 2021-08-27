import { Link } from 'react-router-dom'

import image1 from '/Users/azarnighian/Desktop/az-restaurant/src/components/Images/namnso-ukpanah-5izEn-YcRbI-unsplash.jpg';
import image2 from '/Users/azarnighian/Desktop/az-restaurant/src/components/Images/pexels-pixabay-276720.jpg';
import image3 from '/Users/azarnighian/Desktop/az-restaurant/src/components/Images/pexels-life-of-pix-67468.jpg';

const HomeGallery = () => {
  return (
    <div className="container homeGalleryContainer">        
        <h1>Gallery</h1>
        <div className="homeGalleryImgsContainer">
          <img src={image1} alt="Homepage Gallery 1"></img>
          <img src={image2} alt="Homepage Gallery 2"></img>
          <img src={image3} alt="Homepage Gallery 3"></img>
        </div>        
        <Link to="/gallery" className="linkButton">GALLERY</Link>
    </div>
  )
}

export default HomeGallery