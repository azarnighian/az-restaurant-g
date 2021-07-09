export const navSlide = () => {
    const nav = document.querySelector('.navBar');
    const burger = document.querySelector('.burger');
    const navLinksBackground = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    burger.addEventListener('click', () => {
        document.body.classList.toggle('stopScrolling');
        nav.classList.toggle('burgerClicked');               
        navLinksBackground.classList.toggle('navActive');        
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}