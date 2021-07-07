import React, { useEffect } from 'react';

import NavBar from './NavBar'
import { navSlide } from '/Users/azarnighian/Desktop/az-restaurant/src/navBarStuff.js'

const Contact = () => {
  useEffect(() => {
    navSlide();
    return () => {      
      document.body.classList.remove('stopScrolling');
    };
  });
  
  return (
    <div className="pagesContainer">
        <NavBar />
        <div className="headingContainer">
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
  )
}

export default Contact