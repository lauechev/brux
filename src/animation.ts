const animatedTags = document.querySelectorAll<HTMLElement>('h2, h3, p, section img, a.button');

//fade out on load
animatedTags.forEach((tag) => {
  tag.style.opacity = '0';
});

const fadeIn = function () {
  //look through all the animated tags and see with the getBoundingClientRect if it's in the window.

  let delay = 0.25;

  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      if (tag) {
        tag.style.animation = `fadein 1s ${delay}s both`;
        delay = delay + 0.15;
      }
    } else {
      if (tag) {
        tag.style.opacity = '0';
        tag.style.animation = '';
      }
    }
  });
};

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
