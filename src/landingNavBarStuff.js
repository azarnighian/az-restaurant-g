export const changeNavBar = () => {        
    const scrolled = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;        

    if (scrolled) {
        document.querySelector('.landingNavBar').className += " navScrolled";
    }
    else {
        document.querySelector('.landingNavBar').className = " landingNavBar";
    }
}

export const landingNavSlide = () => {
    const landingNav = document.querySelector('.landingNavBar');
    const landingBurger = document.querySelector('.landingBurger');
    const landingNavLinksBackground = document.querySelector('.landingNavLinks');
    const landingNavLinks = document.querySelectorAll('.landingNavLinks li');
    const linkButton = document.querySelectorAll('.linkButton');
    
    landingBurger.addEventListener('click', () => {
        document.body.classList.toggle('stopScrolling');
        landingNav.classList.toggle('burgerClicked');
        landingNavLinksBackground.classList.toggle('landingNavActive');
        linkButton.forEach((button) => {
            button.classList.toggle('burgerClickedButton');
        });
        // Animate Links
        landingNavLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `landingNavLinkFade 0.7s ease forwards ${index / 7}s`;
            }
        });
        // Burger Animation
        landingBurger.classList.toggle('landingToggle');
    });
}