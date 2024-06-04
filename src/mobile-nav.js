// I will not be doing the arrow function 

function hamburgerTgl() {
  const burgerBtn = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  let toggler = false;

  burgerBtn.addEventListener('click', () => {
    toggler = !toggler;
    if (toggler) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = 'hidden';
    } 
    else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = 'auto';
    }
  })


}
  




export default hamburgerTgl;
