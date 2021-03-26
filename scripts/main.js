// const image = document.querySelectorAll('.image');
const image = document.querySelectorAll('.image');

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

function vmin() {
  if (window.innerHeight > window.innerWidth) {
    return window.innerWidth;
  }
  return window.innerHeight;
}

console.log(vmin());

// console.log(`${centerX}x${centerY}`);

image.forEach((image) => {
  image.onclick = () => {
    // console.log(image.getBoundingClientRect());
    image.classList.toggle('clicked');
    image.classList.toggle('mouse');
    let rect = image.getBoundingClientRect();

    if (image.classList.contains('clicked')) {
      // image.style.transform = `scale(3) translate(${100}px, ${100}px)`;
      image.style.transform = `translate(${
        centerX - rect.x - rect.width / 2
      }px, ${centerY - rect.y - rect.height / 2}px) scale(${vmin() * 0.0045})`;

      image.style.transition = 'transform 0.6s';
    } else image.style.webkitTransform = null;

    // console.log(rect.x);
  };
});
