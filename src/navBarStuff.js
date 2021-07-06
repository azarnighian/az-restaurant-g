export const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    // const darkBackground = document.querySelector('.navActiveDarkenScreen');

    burger.addEventListener('click', () => {
        // Toggle Nav        
        nav.classList.toggle('navActive');

        // Darken background
            // https://stackoverflow.com/questions/4866229/check-element-css-display-with-javascript
        // if (window.getComputedStyle(darkBackground).display === "none") {
        //     darkBackground.style.display = "block";
        // } else if (window.getComputedStyle(darkBackground).display === "block") {
        //     darkBackground.style.display = "none";
        // }

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