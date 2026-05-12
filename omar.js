const openBtn = document.getElementById('openBtn');
const introScreen = document.getElementById('introScreen');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let started = false;

/* 🔥 تشغيل مضمون جدًا */
function startAudio() {
  if (started) return;

  music.volume = 0.5;

  const p = music.play();

  if (p !== undefined) {
    p.then(() => {
      started = true;
      musicBtn.innerHTML = '♪';
    }).catch(err => {
      console.log("blocked:", err);
    });
  }
}

/* OPEN BUTTON (ده أهم Trigger) */
openBtn.addEventListener('click', () => {

  startAudio();

  introScreen.style.opacity = '0';

  setTimeout(() => {
    introScreen.style.display = 'none';
  }, 800);

});


/* MUSIC TOGGLE */
musicBtn.addEventListener('click', () => {

  if (music.paused) {
    startAudio();
  } else {
    music.pause();
    musicBtn.innerHTML = '🔇';
  }

});


/* 🔥 IMPORTANT: fallback واحد فقط */
window.addEventListener('pointerdown', () => {
  startAudio();
}, { once: true });
