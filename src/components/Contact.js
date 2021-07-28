import React, { useEffect } from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from './NavBar'
import { navSlide } from '/Users/azarnighian/Desktop/az-restaurant/src/navBarStuff.js'
import { changeNavBar } from '/Users/azarnighian/Desktop/az-restaurant/src/landingNavBarStuff.js'
import headingImage from '/Users/azarnighian/Desktop/az-restaurant/src/components/Home/homeImages/pexels-anna-tis-6341164.jpg';
import Footer from './Footer'

const Contact = () => {
  useEffect(() => {
    window.removeEventListener('scroll', changeNavBar);
    navSlide();
    return () => {      
      document.body.classList.remove('stopScrolling');
    };
  });
  
  return (
    <motion.div 
      initial={{ opacity: .7 }}
      animate={{ opacity: 1 }} 
      exit={{ opacity: .7 }} 
    >
      <div className="wrapper">
        <NavBar />
        <div className="pagesContainer">        
          <div className="headingContainer">
            <img src={headingImage} alt="heading"></img>
            <h1>Location, Contact & Hours</h1>
          </div>

          <div className="infoContainer">
            <p>123 Food Ave, New York, NY 10010</p>
            <p>212-123-4567</p>
            <p>restaurant@gmail.com</p>

            <p><b>Weekdays</b></p>
            <p>12pm - 10pm</p>
            <p><b>Weekends</b></p>
            <p>9am - 11pm</p>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
    
  )
}

export default Contact