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

document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('typing-text');
  const phrases = [
    'Opa! Meu nome é Gabriel Martins',
    'Bem-vindo ao meu portfólio!',
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    if (deleting) {
      textElement.textContent = phrases[phraseIndex].substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 300);
      }
    } else {
      textElement.textContent = phrases[phraseIndex].substring(0, charIndex++);
      if (charIndex > phrases[phraseIndex].length) {
        deleting = true;
        setTimeout(type, 400);
      }
    }
    setTimeout(type, deleting ? 50 : 100);
  }

  type();
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
