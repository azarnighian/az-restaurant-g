export const changeNavBar = () => {        
    const scrolled = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
        // https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript      

    if (scrolled) {
        document.querySelector('.landingNavBar').className += " navScrolled";
    }
    else {
        document.querySelector('.landingNavBar').className = " landingNavBar";
    }
}

export const landingNavSlide = () => {
    const landingBurger = document.querySelector('.landingBurger');
    const landingNav = document.querySelector('.landingNavLinks');
    const landingNavLinks = document.querySelectorAll('.landingNavLinks li');
    // const landingDarkBackground = document.querySelector('.navActiveDarkenScreen');

    landingBurger.addEventListener('click', () => {
        // Toggle Nav        
        landingNav.classList.toggle('landingNavActive');

        // Darken background
            // https://stackoverflow.com/questions/4866229/check-element-css-display-with-javascript
        // if (window.getComputedStyle(landingDarkBackground).display === "none") {
        //     landingDarkBackground.style.display = "block";
        // } else if (window.getComputedStyle(landingDarkBackground).display === "block") {
        //     landingDarkBackground.style.display = "none";
        // }

        // Animate Links
        landingNavLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `landingNavLinkFade 0.7s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // Burger Animation
        landingBurger.classList.toggle('landingToggle');
    });
}