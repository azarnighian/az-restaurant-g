import image1 from './galleryImages/pexels-anna-tis-6341164.jpg';
import image2 from './galleryImages/pexels-asad-photo-maldives-1449773.jpg';

import { SRLWrapper } from "simple-react-lightbox";

const Gallery = () => {
  return (
    <div className="pagesContainer">        
        <div className="headingContainer">
          <h1>Gallery</h1>
        </div>        
        <div className="galleryContainer">
          <SRLWrapper>
            <img src={image1} alt="Gallery 1"></img>
            <img src={image2} alt="Gallery 2"></img>
            <img src={image1} alt="Gallery 1"></img>
            <img src={image2} alt="Gallery 2"></img>
            <img src={image1} alt="Gallery 1"></img>
            <img src={image2} alt="Gallery 2"></img>
            <img src={image1} alt="Gallery 1"></img>
            <img src={image2} alt="Gallery 2"></img>
            <img src={image1} alt="Gallery 1"></img>
            <img src={image2} alt="Gallery 2"></img>
            <img src={image1} alt="Gallery 1"></img>
            <img src={image2} alt="Gallery 2"></img>
          </SRLWrapper>          
        </div>      
      </div>
  )
}

export default Gallery