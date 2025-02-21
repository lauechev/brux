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

toggleHeader();

document.addEventListener('scroll', function () {
  toggleHeader();
});
