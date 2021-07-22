export const navSlide = () => {
    const nav = document.querySelector('.navBar');
    const burger = document.querySelector('.burger');    

    burger.addEventListener('click', () => {
        document.body.classList.toggle('stopScrolling');
        
        nav.classList.toggle('burgerClicked');               
                
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}