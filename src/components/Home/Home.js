import React, { useEffect } from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from '/Users/azarnighian/Desktop/az-restaurant/src/components/NavBar.js'
import HomeLanding from './HomeLanding'
import HomeAbout from './HomeAbout'
import HomeMenu from './HomeMenu'
import HomeGallery from './HomeGallery'
import HomeInfo from './HomeInfo'

import Footer from '/Users/azarnighian/Desktop/az-restaurant/src/components/Footer.js'

import { changeLandingNavBar } from '/Users/azarnighian/Desktop/az-restaurant/src/navBarStuff.js'

const Home = () => {    
  useEffect(() => {
    // https://reactjs.org/docs/hooks-effect.html
    document.querySelector('.navBar').className += " landingNav";
    document.querySelector('.wrapper').addEventListener('scroll', changeLandingNavBar);
    return () => {
      document.querySelector('.navBar').className = "navBar";
      document.querySelector('.wrapper').removeEventListener('scroll', changeLandingNavBar);
    };
  });
  
  return (
    <motion.div     
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
    >
      <div className="wrapper">  
        <NavBar />
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