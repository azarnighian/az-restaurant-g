import image1 from './galleryImages/pexels-anna-tis-6341164.jpg';
import image2 from './galleryImages/pexels-asad-photo-maldives-1449773.jpg';

// https://github.com/michelecocuccio/simple-react-lightbox
import { SRLWrapper } from "simple-react-lightbox";

// Lightbox options:
const options = {
  settings: {
    lightboxTransitionSpeed: 0,
    overlayColor: "#f7f7f7",
    slideTransitionSpeed: .1,
  },
  buttons: {
    backgroundColor: "grey",
    iconColor: "rgba(255, 255, 255, 0.8)",
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
  },
  caption: {
    showCaption: false,
  }
};

const Gallery = () => {
  return (
    <div className="pagesContainer">        
        <div className="headingContainer">
          <h1>Gallery</h1>
        </div>        
        <div className="galleryContainer">
          <SRLWrapper options={options}>
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