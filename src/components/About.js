import React from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from './NavBar'
import headingImage from '/Users/azarnighian/Desktop/az-restaurant/src/components/Home/homeImages/pexels-anna-tis-6341164.jpg';
import Footer from './Footer'

const About = () => {  
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
            <h1>About Us</h1>
          </div>        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse interdum consectetur libero id. Eu non diam phasellus vestibulum lorem. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. In massa tempor nec feugiat nisl pretium. Risus ultricies tristique nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Sed nisi lacus sed viverra tellus. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Bibendum at varius vel pharetra vel turpis. Arcu bibendum at varius vel pharetra vel turpis.</p>
          <p>Tellus pellentesque eu tincidunt tortor aliquam. Rhoncus urna neque viverra justo nec. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Aliquet nec ullamcorper sit amet. Eu mi bibendum neque egestas congue. Ullamcorper morbi tincidunt ornare massa eget egestas. Ullamcorper morbi tincidunt ornare massa eget. Gravida dictum fusce ut placerat orci. Sed risus ultricies tristique nulla aliquet enim tortor at. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Turpis egestas pretium aenean pharetra. Arcu dui vivamus arcu felis bibendum ut. Feugiat in fermentum posuere urna nec tincidunt praesent. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Congue quisque egestas diam in arcu cursus. Sit amet commodo nulla facilisi. Nec nam aliquam sem et tortor. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Ultricies tristique nulla aliquet enim tortor at auctor.</p>
        </div>
        <Footer />
      </div> 
    </motion.div>    
  )
}

export default About