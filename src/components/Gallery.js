import React from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from './NavBar'

import Footer from './Footer'

import ReactImageAppear from 'react-image-appear';
  // https://github.com/ArunMichaelDsouza/react-image-appear

import headingImage from '/Users/azarnighian/Desktop/az-restaurant/src/components/Images/pexels-life-of-pix-67468.jpg';
import image1 from './Images/pexels-asad-photo-maldives-1449773.jpg';
import image2 from './Images/pexels-daria-shevtsova-704982.jpg';
import image3 from './Images/pexels-de-lemster-krant-2894275.jpg';
import image4 from './Images/pexels-life-of-pix-67468.jpg';
import image5 from './Images/pexels-maria-orlova-4947288.jpg';
import image6 from './Images/pexels-pixabay-265920.jpg';
import image7 from './Images/pexels-pixabay-276720.jpg';
import image8 from './Images/pexels-ruslan-khmelevsky-5392152.jpg';
import image9 from './Images/pexels-skitterphoto-3498.jpg';
import image10 from './Images/pexels-skitterphoto-9315.jpg';
import image11 from './Images/pexels-tom-balabaud-1579715.jpg';
import image12 from './Images/namnso-ukpanah-5izEn-YcRbI-unsplash.jpg';

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
      <div className="wrapper">
        <NavBar />
        <div className="pagesContainer">                  
            <div className="headingContainer">              
              <ReactImageAppear src={headingImage} className="positionedHeadingImg"/>
              <h1>Gallery</h1>
            </div>        
            <div className="galleryContainer">
              <SRLWrapper options={options}>                
                  <ReactImageAppear src={image1}/>                                
                  <ReactImageAppear src={image2}/>                                
                  <ReactImageAppear src={image3}/>                                
                  <ReactImageAppear src={image4}/>                                
                  <ReactImageAppear src={image5}/>                                
                  <ReactImageAppear src={image6}/>                                
                  <ReactImageAppear src={image7}/>                                
                  <ReactImageAppear src={image8}/>                                
                  <ReactImageAppear src={image9}/>                                
                  <ReactImageAppear src={image10}/>                                
                  <ReactImageAppear src={image11}/>                                
                  <ReactImageAppear src={image12}/>                
              </SRLWrapper>                        
            </div>      
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}

export default Gallery