import React, { useEffect } from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from '/Users/azarnighian/Desktop/az-restaurant/src/components/NavBar.js'
import HomeLanding from './HomeLanding'
import HomeAnchorDiv from './HomeAnchorDiv'
import HomeAbout from './HomeAbout'
import HomeMenu from './HomeMenu'
import HomeGallery from './HomeGallery'
import HomeInfo from './HomeInfo'

import Footer from '/Users/azarnighian/Desktop/az-restaurant/src/components/Footer.js'

import { changeLandingNavBar } from '/Users/azarnighian/Desktop/az-restaurant/src/navBarStuff.js'

import { scrollToSection } from '/Users/azarnighian/Desktop/az-restaurant/src/scrollToSection.js'
import smoothscroll from 'smoothscroll-polyfill';
  // https://stackoverflow.com/questions/56011205/is-there-a-safari-equivalent-for-scroll-behavior-smooth#comment106965329_56011281

const Home = () => {    
  useEffect(() => {
    // https://reactjs.org/docs/hooks-effect.html
    document.querySelector('.navBar').className += " landingNav";
    document.querySelector('.wrapper').addEventListener('scroll', changeLandingNavBar);
    
    scrollToSection();
    smoothscroll.polyfill();
    return () => {
      document.querySelector('.wrapper').removeEventListener('scroll', changeLandingNavBar);
    };
  });
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
      <div className="wrapper">  
        <NavBar />
        <HomeLanding />
        <HomeAnchorDiv />
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