const image = document.querySelectorAll('.image');

function vmin() {
  if (window.innerHeight > window.innerWidth) {
    return window.innerWidth;
  }
  return window.innerHeight;
}

image.forEach((image) => {
  image.onclick = () => {
    image.classList.toggle('clicked');
    image.classList.toggle('mouse');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rect = image.getBoundingClientRect();

    if (image.classList.contains('clicked')) {
      image.style.transform = `translate(${
        centerX - rect.x - rect.width / 2
      }px, ${centerY - rect.y - rect.height / 2}px) scale(${vmin() * 0.0045})`;

      image.style.transition = 'transform 0.6s';
    } else image.style.transform = null;
  };
});
