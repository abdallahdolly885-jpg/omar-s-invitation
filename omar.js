const openBtn = document.getElementById('openBtn');
const introScreen = document.getElementById('introScreen');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let musicStarted = false;


function startMusic() {
  if (!musicStarted) {
    music.play().then(() => {
      musicStarted = true;
    }).catch(err => {
      console.log("Autoplay blocked:", err);
    });
  }
}

/* OPEN INVITATION */
openBtn.addEventListener('click', () => {

  startMusic();

  introScreen.style.opacity = '0';

  setTimeout(() => {
    introScreen.style.display = 'none';
  }, 1000);

});


/* MUSIC BUTTON */
musicBtn.addEventListener('click', () => {

  if (music.paused) {
    music.play();
    musicBtn.innerHTML = '♪';
  } else {
    music.pause();
    musicBtn.innerHTML = '🔇';
  }

});


/* SCROLL ANIMATIONS */
const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

window.addEventListener('scroll', () => {

  elements.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }

  });

});



document.addEventListener("click", () => {
  startMusic();
}, { once: true });
