// CSS Imports
import '../styles/modern-normalize.css';
import '../styles/footer.css';
import '../styles/9.hire_me.css';
import '../styles/8.resume.css';
import '../styles/7.about_me.css';
import '../styles/6.hero.css';
import '../styles/5.mobile_navigation.css';
import '../styles/4.navigation.css';
import '../styles/3.bg_stars.css';
import '../styles/2.utils.css';
import '../styles/1.style.css';
import '../styles/media_queries.css';

// Script Imports
import {hamburgerTgl} from './mobile-nav'; //This script is the menu button for mobile screens to open navigation
import {createStar, generateStars} from './stars.js'; // Background moving stars
import  {navHider}  from './nav_hider.js';
import { toggleFlip, toggleFlipHtml, toggleFlipCss, toggleFlipJs, toggleFlipDc } from './flip_cards.js';

//event listener 
document.getElementById('flipCard').addEventListener('click', toggleFlip);
document.getElementById('flipCardHtml').addEventListener('click', toggleFlipHtml);
document.getElementById('flipCardCss').addEventListener('click', toggleFlipCss);
document.getElementById('flipCardJs').addEventListener('click', toggleFlipJs);
document.getElementById('flipCardDc').addEventListener('click', toggleFlipDc);

document.querySelectorAll(".card_flip").forEach( cardD => {
  cardD.addEventListener("click", function () {
    this.classList.toggle("touch");
  });
});

// Initialize Scripts
hamburgerTgl();
createStar();
generateStars(500);
navHider();










