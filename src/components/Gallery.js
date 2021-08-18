import React from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from './NavBar'

import Footer from './Footer'

import headingImage from '/Users/azarnighian/Desktop/az-restaurant/src/components/galleryImages/pexels-life-of-pix-67468.jpg';
import image1 from './galleryImages/pexels-asad-photo-maldives-1449773.jpg';
import image2 from './galleryImages/pexels-daria-shevtsova-704982.jpg';
import image3 from './galleryImages/pexels-de-lemster-krant-2894275.jpg';
import image4 from './galleryImages/pexels-life-of-pix-67468.jpg';
import image5 from './galleryImages/pexels-maria-orlova-4947288.jpg';
import image6 from './galleryImages/pexels-pixabay-265920.jpg';
import image7 from './galleryImages/pexels-pixabay-276720.jpg';
import image8 from './galleryImages/pexels-ruslan-khmelevsky-5392152.jpg';
import image9 from './galleryImages/pexels-skitterphoto-3498.jpg';
import image10 from './galleryImages/pexels-skitterphoto-9315.jpg';
import image11 from './galleryImages/pexels-tom-balabaud-1579715.jpg';
import image12 from './galleryImages/namnso-ukpanah-5izEn-YcRbI-unsplash.jpg';

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
    <motion.div exit={{ opacity: 0 }}>
      <div className="wrapper">
        <NavBar />
        <div className="pagesContainer">                  
            <div className="headingContainer">
              <img src={headingImage} alt="heading" class="positionedHeadingImg"></img>
              <h1>Gallery</h1>
            </div>        
            <div className="galleryContainer">
              <SRLWrapper options={options}>
                <div className="cell">
                  <img src={image1} alt="Gallery 1"></img>
                </div>
                <div className="cell">
                  <img src={image2} alt="Gallery 2"></img>
                </div>
                <div className="cell">
                  <img src={image3} alt="Gallery 3"></img>
                </div>
                <div className="cell">
                  <img src={image4} alt="Gallery 4"></img>
                </div>
                <div className="cell">
                  <img src={image5} alt="Gallery 5"></img>
                </div>
                <div className="cell">
                  <img src={image6} alt="Gallery 6"></img>
                </div>
                <div className="cell">
                  <img src={image7} alt="Gallery 7"></img>
                </div>
                <div className="cell">
                  <img src={image8} alt="Gallery 8"></img>
                </div>
                <div className="cell">
                  <img src={image9} alt="Gallery 9"></img>
                </div>
                <div className="cell">
                  <img src={image10} alt="Gallery 10"></img>
                </div>
                <div className="cell">
                  <img src={image11} alt="Gallery 11"></img>
                </div>
                <div className="cell">
                  <img src={image12} alt="Gallery 12"></img>
                </div>
              </SRLWrapper>                        
            </div>      
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}

export default Gallery