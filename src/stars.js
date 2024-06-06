export function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.animationDuration = `${Math.random() * 10 + 10}s, ${Math.random() * 2 + 3}s`;
  star.style.animationDelay = `${Math.random() * 10}s`;
  return star;
}

export function generateStars(count) {
  const starsContainer = document.getElementById('stars');
  for (let i = 0; i < count; i++) {
    starsContainer.appendChild(createStar());
  }
}


