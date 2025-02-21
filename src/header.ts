// when i scroll down the page, add a class to make the header white.

const headerTag = document.querySelector<HTMLElement>('header');

const toggleHeader = function () {
  const pixels = window.scrollY;

  if (pixels > 60) {
    headerTag?.classList.add('scrolled');
  } else {
    headerTag?.classList.remove('scrolled');
  }
};

const fadeBox = function () {
  const pixels = window.scrollY;

  const alpha = Math.min(pixels / 900, 0.25);

  if (headerTag) {
    headerTag.style.boxShadow = `0 0 10px rgba(0,0,0, ${alpha})`;
  }
};

fadeBox();
toggleHeader();

document.addEventListener('scroll', function () {
  toggleHeader();
  fadeBox();
});
