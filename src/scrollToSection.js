export const scrollToSection = () => {
    // https://usefulangle.com/post/156/javascript-scroll-to-element
    
    var downArrow = document.querySelector('.downArrow');
    var aboveAboutSection = document.querySelector('#aboveAboutSection');
    
    // https://stackoverflow.com/questions/24050456/onclick-assigned-function-with-parameters            
    downArrow.addEventListener('click', function() {
        aboveAboutSection.scrollIntoView({ behavior: 'smooth'});
            // For Safari, I followed: https://stackoverflow.com/questions/56011205/is-there-a-safari-equivalent-for-scroll-behavior-smooth#comment106965329_56011281        
    });
}