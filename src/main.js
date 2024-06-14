// CSS Imports
import '../styles/modern-normalize.css';
import '../styles/media_queries.css';
import '../styles/footer.css';
import '../styles/8.resume.css';
import '../styles/7.about_me.css';
import '../styles/6.hero.css';
import '../styles/5.mobile_navigation.css';
import '../styles/4.navigation.css';
import '../styles/3.bg_stars.css';
import '../styles/2.utils.css';
import '../styles/1.style.css';

// Script Imports
import hamburgerTgl from './mobile-nav';
import { createStar, generateStars,} from './stars.js';


// Initialize Scripts
hamburgerTgl();
generateStars(500);









