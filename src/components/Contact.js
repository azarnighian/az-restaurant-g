import React from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from './NavBar'
import headingImage from '/Users/azarnighian/Desktop/az-restaurant/src/components/Images/namnso-ukpanah-5izEn-YcRbI-unsplash.jpg';
import Footer from './Footer'

import ReactImageAppear from 'react-image-appear';
  // https://github.com/ArunMichaelDsouza/react-image-appear

const Contact = () => {  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
      <div className="wrapper">
        <NavBar />
        <div className="pagesContainer">        
          <div className="headingContainer">
            <ReactImageAppear src={headingImage} className="positionedHeadingImg"/>
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