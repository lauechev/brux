const irisLeft = document.querySelector<HTMLDivElement>('div.iris-left');
const irisRight = document.querySelector<HTMLDivElement>('div.iris-right');

const moveEye = function (tag: HTMLDivElement, mouseX: number, mouseY: number) {
  tag.style.left = mouseX + 'px';
  tag.style.top = mouseY + 'px';
};

document.addEventListener('mousemove', function (event) {
  if (irisLeft && irisRight) {
    moveEye(irisLeft, event.pageX, event.pageY);
    moveEye(irisRight, event.pageX, event.pageY);
  }
});
