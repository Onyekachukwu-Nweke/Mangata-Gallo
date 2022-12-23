let className = "head-scroll";
let iconScroll = "scroll";
let icons = document.getElementsByClassName("icon");
let iconArray = Array.from(icons);
let scrollTrigger = 100;

// Scroll on header
window.onscroll = function() {
    //We add pageYOffset for compatibility with IE
    if(window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger){
        document.getElementsByTagName("header")[0].classList.add(className);
        document.getElementById("logo").src = "assets/img/logo2.png";
        iconArray[0].classList.add(iconScroll);
    } else {
        document.getElementsByTagName("header")[0].classList.remove(className);
        document.getElementById("logo").src = "assets/img/logo1.png";
        iconArray[0].classList.remove(iconScroll);
    }
}

// Mobile Menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}