document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('animated-text');
  const phrases = ['Opa! Meu nome é', 'Bem-vindo ao meu portfólio!'];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let typingSpeed = 100;
  let deletingSpeed = 50;

  function type() {
    textElement.textContent = phrases[phraseIndex].substring(0, charIndex);
    if (!deleting && charIndex < phrases[phraseIndex].length) {
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (deleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, deletingSpeed);
    } else if (charIndex === phrases[phraseIndex].length) {
      deleting = true;
      setTimeout(type, 1000); // Pausa após digitar a frase completa
    } else if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500); // Pausa antes de começar a digitar novamente
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
