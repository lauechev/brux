const animatedTags = document.querySelectorAll<HTMLElement>('h2, h3, p, section img, a.button');

//fade out on load
animatedTags.forEach((tag) => {
  tag.style.opacity = '0';
});

const fadeIn = function () {};

//on load, run fadeIn
fadeIn();

//on scroll, run fadeIn
document.addEventListener('scroll', function () {
  fadeIn();
});

//on browser resize, run fadeIn
window.addEventListener('resize', function () {
  fadeIn();
});
