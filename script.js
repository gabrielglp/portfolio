document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('animated-text');
  const text = textElement.innerText;
  const speed = 200;
  let index = 0;
  let isDeleting = false;

  function type() {
    let textToDisplay = text.substring(0, index);
    if (isDeleting) {
      textElement.innerText = textToDisplay;
      index--;
      if (index < 0) {
        isDeleting = false;
        setTimeout(type, speed);
      } else {
        setTimeout(type, speed / 2);
      }
    } else {
      textElement.innerText = textToDisplay;
      index++;
      if (index > text.length) {
        isDeleting = true;
        setTimeout(type, speed * 2);
      } else {
        setTimeout(type, speed);
      }
    }
  }

  type();
});

var swiper = new Swiper('.mySwiper', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-120%', 0, -500],
    },
    next: {
      shadow: true,
      translate: ['120%', 0, -500],
    },
  },
});

const hamburger = document.querySelector('.hamburger');
const navContent = document.querySelector('.nav-content');
const body = document.body;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navContent.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

function closeMenu() {
  hamburger.classList.remove('active');
  navContent.classList.remove('active');
  body.classList.remove('no-scroll');
}
