function hamburgerTgl() {
  const burgerBtn = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.m_nav_btn');

  let toggler = false;

  burgerBtn.addEventListener('click', () => {
    toggler = !toggler;
    if (toggler) {
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    } else {
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggler = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
}

export default hamburgerTgl;