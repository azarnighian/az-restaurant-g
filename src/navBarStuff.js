document.addEventListener('DOMContentLoaded', function () {    
    const onLanding = document.querySelector('nav').classList.contains("landingNav");
    if (onLanding) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
           link.className += " landingLink"; 
        });   
        
        window.onscroll = function () { changeNavBar() };
        
        // https://www.w3schools.com/jsref/prop_html_classname.asp
        // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll2
    }        
    
    navSlide();
});

const changeNavBar = () => {        
    const scrolled = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
            // https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript      

    if (scrolled) {
        document.querySelector('nav').className += " nav-scrolled";
    }
    else {
        document.querySelector('nav').className = " landingNav";
    }
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const darkBackground = document.querySelector('.nav-active-darken-screen');

    burger.addEventListener('click', () => {
        // Toggle Nav        
        nav.classList.toggle('nav-active');

        // Darken background
            // https://stackoverflow.com/questions/4866229/check-element-css-display-with-javascript
        if (window.getComputedStyle(darkBackground).display === "none") {
            darkBackground.style.display = "block";
        } else if (window.getComputedStyle(darkBackground).display === "block") {
            darkBackground.style.display = "none";
        }

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}