// CSS Imports
import '../styles/modern-normalize.css';
import '../styles/nav.css';
import '../styles/utils.css';
import '../styles/bg.css';
import '../styles/hero.css';
import '../styles/mobile-nav.css';
import '../styles/stars.css';
import '../styles/style.css';

// Script Imports
import hamburgerTgl from './mobile-nav';
import { createStar, generateStars, handleMouseMove, handleTouchMove } from './stars.js';

// Event Listeners
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('touchmove', handleTouchMove);

// Initialize Scripts
hamburgerTgl();
generateStars(500);









