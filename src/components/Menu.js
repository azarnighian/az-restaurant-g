import React, { useEffect } from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from './NavBar'
import { navSlide } from '/Users/azarnighian/Desktop/az-restaurant/src/navBarStuff.js'
import { changeNavBar } from '/Users/azarnighian/Desktop/az-restaurant/src/landingNavBarStuff.js'
import headingImage from '/Users/azarnighian/Desktop/az-restaurant/src/components/Home/homeImages/pexels-anna-tis-6341164.jpg';

const Menu = () => {
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
      <div className="pagesContainer">        
          <NavBar />
          <div className="headingContainer">
            <img src={headingImage} alt="heading"></img>
            <h1>Our Menu</h1>
          </div>        
          
          <div className="menuContainer">
            <h1>Appetizers</h1>
            <div className="menuItemsContainer">
              <div className="menuItem">
                <h2>Chicken Wings</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div> 
              <div className="menuItem">
                <h2>Burger Sliders</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$12</p>
              </div> 
              <div className="menuItem">
                <h2>BBQ Ribs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$15</p>
              </div>
              <div className="menuItem">
                <h2>Pita and Hummus</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$8</p>
              </div>
              <div className="menuItem">
                <h2>Moroccan Cigars</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>  
              <div className="menuItem">
                <h2>Falafel</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>         
            </div>

            <h1>Soups</h1>
            <div className="menuItemsContainer">
              <div className="menuItem">
                <h2>Chicken Noodle Soup</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div> 
              <div className="menuItem">
                <h2>Hot and Sour Soup</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$12</p>
              </div> 
              <div className="menuItem">
                <h2>Minestrone Soup</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$15</p>
              </div>
              <div className="menuItem">
                <h2>Gazpacho Soup</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$8</p>
              </div>
              <div className="menuItem">
                <h2>Split Pea Soup</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>  
              <div className="menuItem">
                <h2>French Onion Soup</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>         
            </div>

            <h1>Salads</h1>
            <div className="menuItemsContainer">
              <div className="menuItem">
                <h2>Chicken Salad</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div> 
              <div className="menuItem">
                <h2>Beef Salad</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$12</p>
              </div> 
              <div className="menuItem">
                <h2>Fish Salad</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$15</p>
              </div>
              <div className="menuItem">
                <h2>Israeli Salad</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$8</p>
              </div>
              <div className="menuItem">
                <h2>Caesar Salad</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>  
              <div className="menuItem">
                <h2>House Salad</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>         
            </div>

            <h1>Entrees</h1>
            <div className="menuItemsContainer">
              <div className="menuItem">
                <h2>Grilled Chicken Breast</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div> 
              <div className="menuItem">
                <h2>Chicken Shish Kabob</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$12</p>
              </div> 
              <div className="menuItem">
                <h2>Sesame Chicken</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$15</p>
              </div>
              <div className="menuItem">
                <h2>Classic Burger</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$8</p>
              </div>
              <div className="menuItem">
                <h2>Brisket Burger</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>  
              <div className="menuItem">
                <h2>Pastrami Burger</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>         
            </div>

            <h1>Steak</h1>
            <div className="menuItemsContainer">
              <div className="menuItem">
                <h2>Flat Iron Steak</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div> 
              <div className="menuItem">
                <h2>Rib Eye Steak</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$12</p>
              </div> 
              <div className="menuItem">
                <h2>Cowboy Steak</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$15</p>
              </div>
              <div className="menuItem">
                <h2>Filet Mignon</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$8</p>
              </div>
              <div className="menuItem">
                <h2>Skirt Steak</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>  
              <div className="menuItem">
                <h2>House Steak</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>         
            </div>

            <h1>Fish</h1>
            <div className="menuItemsContainer">
              <div className="menuItem">
                <h2>Salmon</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div> 
              <div className="menuItem">
                <h2>Bronzini</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$12</p>
              </div> 
              <div className="menuItem">
                <h2>Tuna</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$15</p>
              </div>
              <div className="menuItem">
                <h2>Chilean Sea Bass</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$8</p>
              </div>
              <div className="menuItem">
                <h2>Tilapia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>  
              <div className="menuItem">
                <h2>Trout</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>         
            </div>

            <h1>Kids Menu</h1>
            <div className="menuItemsContainer">
              <div className="menuItem">
                <h2>Chicken Fingers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div> 
              <div className="menuItem">
                <h2>Hot Dog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$12</p>
              </div> 
              <div className="menuItem">
                <h2>Kid's Burger</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$15</p>
              </div>
              <div className="menuItem">
                <h2>Fish and Chips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$8</p>
              </div>
              <div className="menuItem">
                <h2>Penne Pasta</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>  
              <div className="menuItem">
                <h2>Spaghetti</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>         
            </div>

            <h1>Dessert</h1>
            <div className="menuItemsContainer">
              <div className="menuItem">
                <h2>Chocolate Souffle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div> 
              <div className="menuItem">
                <h2>Creme Brulee</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$12</p>
              </div> 
              <div className="menuItem">
                <h2>Fruit Sorbet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$15</p>
              </div>
              <div className="menuItem">
                <h2>Apple Pie</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$8</p>
              </div>
              <div className="menuItem">
                <h2>Tiramisu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>  
              <div className="menuItem">
                <h2>Chocolate Mousse Cake</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="price">$10</p>
              </div>         
            </div>
          </div>
      </div>
    </motion.div>
  )
}

export default Menu