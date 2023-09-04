const fullScreenImage = document.querySelectorAll('.full-screen-image');

fullScreenImage.forEach(fullImg => {
  fullImg.onclick = function() {
    fullImg.classList.toggle('active');
  }
});

const player = new Plyr('#player', {captions: {active: true}});

window.player = player;


let currentAudio = null;

const audioElements = [
  { audio: new Audio('../image/audio1.mp3'), button: document.querySelector('.player-1'), time: document.querySelector('.time-audio1') },
  { audio: new Audio('../image/audio2.mp3'), button: document.querySelector('.player-2'), time: document.querySelector('.time-audio2') },
  { audio: new Audio('../image/audio3.mp3'), button: document.querySelector('.player-3'), time: document.querySelector('.time-audio3') }
];

function stopAndResetCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    const button = audioElements.find(element => element.audio === currentAudio).button;
    button.classList.remove('fa-circle-pause');
    isPlaying = false;
  }
}

for (let i = 0; i < audioElements.length; i++) {
  const audio = audioElements[i].audio;
  const button = audioElements[i].button;
  const time = audioElements[i].time;

  let isPlaying = false;

  button.addEventListener('click', function() {
    stopAndResetCurrentAudio();
    if (currentAudio === audio) {
      currentAudio = null;
    } else {
      currentAudio = audio;
      currentAudio.play();
      isPlaying = true;
      button.classList.add('fa-circle-pause');
    }
  });

  audio.addEventListener('timeupdate', function() {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    time.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });
}