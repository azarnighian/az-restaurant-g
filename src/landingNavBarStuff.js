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
    const landingNavLogo = document.querySelector('.landingLogo');
    const landingBurger = document.querySelector('.landingBurger');
    const landingBurgerLines = document.querySelectorAll('.landingBurger div');
    const landingNavLinksBackground = document.querySelector('.landingNavLinks');
    const landingNavLinks = document.querySelectorAll('.landingNavLinks li');
    
    landingBurger.addEventListener('click', () => {
        document.body.classList.toggle('stopScrolling');
        
        // Animate nav header
        // landingNav.classList.toggle('burgerClicked');
        if (landingNav.style.animation) {
            landingNav.style.animation = '';
        }
        else {
            landingNav.style.animation = 'landingNavHeaderFade 0.7s ease forwards';
        }
        // Animate logo
        if (landingNavLogo.style.animation) {
            landingNavLogo.style.animation = '';
        }
        else {
            landingNavLogo.style.animation = 'landingNavLogoFade 0.7s ease forwards';
        }
        // Animate burger
        landingBurgerLines.forEach((line, index) => {
            if (line.style.animation) {
                line.style.animation = '';
            } else {
                line.style.animation = 'landingNavBurgerFade 0.7s ease forwards';
            }
        });
        
        // Animate links background
        if (landingNavLinksBackground.style.animation) {
            landingNavLinksBackground.style.animation = '';
        }
        else {
            landingNavLinksBackground.style.animation = 'landingNavFade 0.7s ease forwards';
        }
        
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