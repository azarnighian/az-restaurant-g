import React, { useEffect } from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import HomeNavBar from './HomeNavBar'
import HomeLanding from './HomeLanding'
import HomeAbout from './HomeAbout'
import HomeMenu from './HomeMenu'
import HomeGallery from './HomeGallery'
import HomeInfo from './HomeInfo'

import Footer from '/Users/azarnighian/Desktop/az-restaurant/src/components/Footer.js'

import { changeNavBar, landingNavSlide } from '/Users/azarnighian/Desktop/az-restaurant/src/landingNavBarStuff.js'

const Home = () => {    
  useEffect(() => {
    // https://reactjs.org/docs/hooks-effect.html
    const wrapperDiv = document.querySelector('.wrapper');    
    wrapperDiv.addEventListener('scroll', changeNavBar);
    landingNavSlide();
    return () => {
      document.body.classList.remove('stopScrolling');
      wrapperDiv.removeEventListener('scroll', changeNavBar);      
    };
  });
  
  return (
    <motion.div 
      initial={{ opacity: .7 }}
      animate={{ opacity: 1 }} 
      exit={{ opacity: .7 }} 
    >
      <div className="wrapper">  
        <HomeNavBar />
        <HomeLanding />
        <HomeAbout />
        <HomeMenu />
        <HomeGallery />
        <HomeInfo />
        <Footer />
      </div> 
    </motion.div>    
  )
}

export default Home