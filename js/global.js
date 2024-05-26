import {header} from "../components/header.js";
import {footer} from "../components/footer.js";

function loadNavbars(){
    let newHeaderDiv = document.createElement('div');
    newHeaderDiv.innerHTML = header();
    document.getElementById("header-container").appendChild(newHeaderDiv);

    let newFooterDiv = document.createElement('div');
    newFooterDiv.innerHTML = footer();
    document.getElementById("footer-container").appendChild(newFooterDiv);

    updateText();
    updateMenu();
}

loadNavbars();

function updateText() {
    var dynamicText = document.getElementById('update-title');

    var screenWidth = window.innerWidth;

    if (screenWidth <= 1250) {
        dynamicText.textContent = "LCTC";
    }
    else{
        dynamicText.textContent = "LIMITED CAPITAL TRADING CHALLENGE";
    }
}

window.addEventListener('resize', updateText);

function updateMenu(){
    var dynamicMenu = document.getElementById('dynamic-menu');

    var screenWidth = window.innerWidth;

    if(screenWidth <= 850){
        dynamicMenu.style.display = "none";
    }
    else{
        dynamicMenu.style.display = "flex";
    }
}

window.addEventListener('resize', updateMenu);

var hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} 

if (hasTouchScreen) {
    // Device is likely mobile, so do stuff for mobile devices here.
}