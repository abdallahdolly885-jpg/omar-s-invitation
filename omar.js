const openBtn = document.getElementById('openBtn');
const introScreen = document.getElementById('introScreen');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let isPlaying = false;

function playMusic() {
  music.volume = 0.5;

  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        musicBtn.innerHTML = '♪';
      })
      .catch((err) => {
        console.log("Play blocked:", err);
      });
  }
}

/* OPEN BUTTON */
openBtn.addEventListener('click', () => {

  playMusic();

  introScreen.style.opacity = '0';

  setTimeout(() => {
    introScreen.style.display = 'none';
  }, 800);

});


/* MUSIC BUTTON */
musicBtn.addEventListener('click', () => {

  if (music.paused) {
    playMusic();
  } else {
    music.pause();
    musicBtn.innerHTML = '🔇';
  }

});


document.addEventListener('click', function firstClick() {
  playMusic();
  document.removeEventListener('click', firstClick);
});


/* Scroll animations */
const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

window.addEventListener('scroll', () => {

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });

});
