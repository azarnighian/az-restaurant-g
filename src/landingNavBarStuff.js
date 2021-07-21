export const changeNavBar = () => {        
    const scrolled = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;        

    if (scrolled) {
        document.querySelector('.landingNavBar').className += " landingNavScrolled";
    }
    else {
        document.querySelector('.landingNavBar').className = " landingNavBar";
    }
}

export const landingNavSlide = () => {
    const landingNav = document.querySelector('.landingNavBar');
    const landingBurger = document.querySelector('.landingBurger');
    
    landingBurger.addEventListener('click', () => {
        document.body.classList.toggle('stopScrolling');
                
        landingNav.classList.toggle('landingBurgerClicked');                
        
        // Burger Animation
        landingBurger.classList.toggle('landingToggle');
    });
}