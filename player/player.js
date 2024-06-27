// audio

const playBtn = document.getElementById("playsong");
const boxEl = document.getElementsByClassName("picture")[0];
const audio = document.getElementsByTagName("audio")[0];
const songname = document.getElementsByTagName("h2")[0];
const songlive = document.getElementsByTagName("input")[0];
const playList = [
  {
    name: "Overcopensate",
    src: "../Twenty One Pilots - Overcompensate (Official Video) (320).mp3",
    img: "./Twenty_One_Pilots_-_Clancy.png",
  },
  {
    name: "Paladin strait",
    src: "./Twenty One Pilots - Paladin Strait (Official Video) (320).mp3",
    img: "./bab.webp",
  },
];

let currentSong = 0;

playBtn.addEventListener("click", () => {
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
  currentSong++;
  if (currentSong === playList.length) {
    currentSong = 0;
  }
  audio.src = playList[currentSong].src;
  audio.play();
  boxEl.style.backgroundImage = "url('" + playList[currentSong].img + "')";
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  boxEl.classList.add("rotate");
  songname.innerText = playList[currentSong].name;
});

const preBtn = document.getElementById("presong");
preBtn.addEventListener("click", () => {
  currentSong = currentSong - 1;
  if (currentSong < 0) {
    currentSong = playList.length - 1;
  }
  audio.src = playList[currentSong].src;
  audio.play();
  boxEl.style.backgroundImage = "url('" + playList[currentSong].img + "')";
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  boxEl.classList.add("rotate");
  songname.innerText = playList[currentSong].name;
});

function liveserer() {
  songlive.max = audio.duration;
  songlive.value = audio.currentTime;
}
