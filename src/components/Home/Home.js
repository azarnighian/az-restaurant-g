import React, { useEffect } from 'react';

import HomeNavBar from './HomeNavBar'
import HomeLanding from './HomeLanding'
import HomeAbout from './HomeAbout'
import HomeMenu from './HomeMenu'
import HomeGallery from './HomeGallery'
import HomeInfo from './HomeInfo'

import { changeNavBar, landingNavSlide } from '/Users/azarnighian/Desktop/az-restaurant/src/landingNavBarStuff.js'

const Home = () => {    
  useEffect(() => {
    // https://reactjs.org/docs/hooks-effect.html
    window.addEventListener('scroll', changeNavBar);
    landingNavSlide();
    return () => {
      document.body.classList.remove('stopScrolling');
      window.removeEventListener('scroll', changeNavBar);      
    };
  });
  
  return (
    <> 
      <HomeNavBar />     
      <HomeLanding />
      <HomeAbout />
      <HomeMenu />
      <HomeGallery />
      <HomeInfo />
    </>
  )
}

export default Home