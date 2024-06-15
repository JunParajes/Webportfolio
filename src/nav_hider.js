export const navHider = () => {
  let lastScrollTop = 0;
  const navArea = document.getElementById("navArea");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Downscroll
      navArea.style.top = "-95px"; // Adjust this value based on the height of your nav
    } else {
      // Upscroll
      navArea.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
};
