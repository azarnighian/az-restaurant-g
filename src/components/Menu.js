import React, { useEffect } from 'react';

import { motion } from "framer-motion"
  // https://www.youtube.com/watch?v=qJt-FtzJ5fo

import NavBar from './NavBar'
import headingImage from '/Users/azarnighian/Desktop/az-restaurant/src/components/Images/pexels-daria-shevtsova-704982.jpg';
import Footer from './Footer'

import ReactImageAppear from 'react-image-appear';
  // https://github.com/ArunMichaelDsouza/react-image-appear

import { menuModals } from '/Users/azarnighian/Desktop/az-restaurant/src/menuModals.js'
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

const Menu = () => { 
  useEffect(() => {
    // https://reactjs.org/docs/hooks-effect.html
    menuModals();
  });
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
      <div className="wrapper">      
        <NavBar />
        <div className="pagesContainer">
            <div className="headingContainer">
              <ReactImageAppear src={headingImage}/>
              <h1>Menu</h1>
            </div>        
            
            <div className="menuContainer">
              <p>Click on a food’s title to see a (placeholder) picture.</p>
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
                  <h2>Filet Mignon Steak</h2>
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

            {/* The Modal */}
              {/* https://www.w3schools.com/howto/howto_css_modals.asp */}
            <div id="menuModal" class="modal">

              {/* Modal content */}
              <div class="modal-content">
                <span class="close">&times;</span>
                <img src={image1} alt="Menu Item 1" id="0"></img>
                <img src={image2} alt="Menu Item 2" id="1"></img>
                <img src={image3} alt="Menu Item 3" id="2"></img>
                <img src={image4} alt="Menu Item 4" id="3"></img>
                <img src={image5} alt="Menu Item 5" id="4"></img>
                <img src={image6} alt="Menu Item 6" id="5"></img>
                <img src={image7} alt="Menu Item 7" id="6"></img>
                <img src={image8} alt="Menu Item 8" id="7"></img>
                <img src={image9} alt="Menu Item 9" id="8"></img>
                <img src={image10} alt="Menu Item 10" id="9"></img>
                <img src={image11} alt="Menu Item 11" id="10"></img>
                <img src={image12} alt="Menu Item 12" id="11"></img>
                <img src={image1} alt="Menu Item 13" id="12"></img>
                <img src={image2} alt="Menu Item 14" id="13"></img>
                <img src={image3} alt="Menu Item 15" id="14"></img>
                <img src={image4} alt="Menu Item 16" id="15"></img>
                <img src={image5} alt="Menu Item 17" id="16"></img>
                <img src={image6} alt="Menu Item 18" id="17"></img>
                <img src={image7} alt="Menu Item 19" id="18"></img>
                <img src={image8} alt="Menu Item 20" id="19"></img>
                <img src={image9} alt="Menu Item 21" id="20"></img>
                <img src={image10} alt="Menu Item 22" id="21"></img>
                <img src={image11} alt="Menu Item 23" id="22"></img>
                <img src={image12} alt="Menu Item 24" id="23"></img>
                <img src={image1} alt="Menu Item 25" id="24"></img>
                <img src={image2} alt="Menu Item 26" id="25"></img>
                <img src={image3} alt="Menu Item 27" id="26"></img>
                <img src={image4} alt="Menu Item 28" id="27"></img>
                <img src={image5} alt="Menu Item 29" id="28"></img>
                <img src={image6} alt="Menu Item 30" id="29"></img>
                <img src={image7} alt="Menu Item 31" id="30"></img>
                <img src={image8} alt="Menu Item 32" id="31"></img>
                <img src={image9} alt="Menu Item 33" id="32"></img>
                <img src={image10} alt="Menu Item 34" id="33"></img>
                <img src={image11} alt="Menu Item 35" id="34"></img>
                <img src={image12} alt="Menu Item 36" id="35"></img>
                <img src={image1} alt="Menu Item 37" id="36"></img>
                <img src={image2} alt="Menu Item 38" id="37"></img>
                <img src={image3} alt="Menu Item 39" id="38"></img>
                <img src={image4} alt="Menu Item 40" id="39"></img>
                <img src={image5} alt="Menu Item 41" id="40"></img>
                <img src={image6} alt="Menu Item 42" id="41"></img>
                <img src={image7} alt="Menu Item 43" id="42"></img>
                <img src={image8} alt="Menu Item 44" id="43"></img>
                <img src={image9} alt="Menu Item 45" id="44"></img>
                <img src={image10} alt="Menu Item 46" id="45"></img>
                <img src={image11} alt="Menu Item 47" id="46"></img>
                <img src={image12} alt="Menu Item 48" id="47"></img>
                <img src={image1} alt="Menu Item 49" id="48"></img>
                <img src={image2} alt="Menu Item 50" id="49"></img>
                <img src={image3} alt="Menu Item 51" id="50"></img>
                <img src={image4} alt="Menu Item 52" id="51"></img>
                <img src={image5} alt="Menu Item 53" id="52"></img>
                <img src={image6} alt="Menu Item 54" id="53"></img>
                <img src={image7} alt="Menu Item 55" id="54"></img>
                <img src={image8} alt="Menu Item 56" id="55"></img>
                <img src={image9} alt="Menu Item 57" id="56"></img>
                <img src={image10} alt="Menu Item 58" id="57"></img>
                <img src={image11} alt="Menu Item 59" id="58"></img>
                <img src={image12} alt="Menu Item 60" id="59"></img>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}

export default Menu