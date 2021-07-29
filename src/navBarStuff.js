export const navBurgerClick = () => {
    const nav = document.querySelector('.navBar');
    const burger = document.querySelector('.burger');    

    burger.addEventListener('click', () => {
        document.body.classList.toggle('stopScrolling');
        
        nav.classList.toggle('burgerClicked');               
                
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// For landing page:
export const changeLandingNavBar = () => {        
    const wrapperDiv = document.querySelector('.wrapper');
    const scrolled = wrapperDiv.scrollTop > 50;        

    if (scrolled) {
        document.querySelector('.navBar').className += " landingNavScrolled";
    }
    else {
        document.querySelector('.navBar').className = "navBar landingNav";
    }
}