export const hamburgerTgl = () => {
  const burgerBtn = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.m_nav_btn');

  let toggler = false;

  const hamburgerIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fafafa">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
  `;

  const closeIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  `;

  burgerBtn.innerHTML = hamburgerIcon;

  burgerBtn.addEventListener('click', () => {
    toggler = !toggler;
    if (toggler) {
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
      burgerBtn.innerHTML = closeIcon; // Change to close icon
    } else {
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
      burgerBtn.innerHTML = hamburgerIcon; // Change to hamburger icon
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggler = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
      burgerBtn.innerHTML = hamburgerIcon; // Ensure hamburger icon is shown
    });
  });
}
