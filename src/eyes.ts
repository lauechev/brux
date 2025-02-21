const irisLeft = document.querySelector<HTMLDivElement>('div.iris-left');
const irisRight = document.querySelector<HTMLDivElement>('div.iris-right');

let interval: number | null = null;

//move the eyes every 3 seconds
const startInterval = function () {
  if (interval !== null) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    if (irisLeft && irisRight) {
      moveEye(irisLeft, x, y);
      moveEye(irisRight, x, y);
    }
  }, 3000);
};

const moveEye = function (tag: HTMLDivElement, mouseX: number, mouseY: number) {
  // tag.style.left = mouseX + 'px';
  // tag.style.top = mouseY + 'px';

  //center of the eye
  const eyeMidX = tag.getBoundingClientRect().left;
  const eyeMidY = tag.getBoundingClientRect().top;

  //find difference between eye and mouse
  const diffX = mouseX - eyeMidX;
  const diffY = mouseY - eyeMidY - window.scrollY;

  //pythagoras theorem
  const diff = Math.sqrt(diffX * diffX + diffY * diffY);

  //what is the capped radius
  const radius = Math.min(3, diff);

  //tan in math
  const angle = Math.atan2(diffY, diffX);

  //lets get the capped version of this based on the angle
  const cappedX = radius * Math.cos(angle);
  const cappedY = radius * Math.sin(angle);

  const eyeTag = tag.querySelector('div');
  if (eyeTag) {
    eyeTag.style.left = cappedX + 'px';
    eyeTag.style.top = cappedY + 'px';
  }
};

startInterval();

document.addEventListener('mousemove', function (event) {
  startInterval();
  if (irisLeft && irisRight) {
    moveEye(irisLeft, event.pageX, event.pageY);
    moveEye(irisRight, event.pageX, event.pageY);
  }
});
