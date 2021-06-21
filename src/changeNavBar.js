// https://www.w3schools.com/jsref/prop_html_classname.asp
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll2

document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () { changeNavBar() };    
});

function changeNavBar() {            
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('nav').className += " nav-scrolled";                                           
    } 
    else {
        document.querySelector('nav').className = "";                 
    }
}