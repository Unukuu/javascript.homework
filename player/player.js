// audio

const playBtn = document.getElementById("playsong");
const boxEl = document.getElementsByClassName("picture")[0];

playBtn.addEventListener("click", () => {
  const audio = document.getElementsByTagName("audio")[0];
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    audio.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
  boxEl.classList.toggle("rotate");
});

const nextBtn = document.getElementById("nextsong");
nextBtn.addEventListener("click", () => {
  const audio = document.getElementsByTagName("audio")[0];
  audio.src = "./Twenty One Pilots - Paladin Strait (Official Video) (320).mp3";
  const backgimg = document.getElementsByClassName("picture")[0];
  backgimg.style.backgroundImage = "url(./bab.webp)";
});
