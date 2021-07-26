// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

document.addEventListener('DOMContentLoaded', function () {
    // Fix for vh units on mobile:
    let vh100 = window.innerHeight;
    document.documentElement.style.setProperty('--vh100', `${vh100}px`);

    // Do the same thing if screen gets resized, like if device gets rotated
    window.addEventListener('resize', () => {
        let vh100 = window.innerHeight;
        document.documentElement.style.setProperty('--vh100', `${vh100}px`);
    });    
});