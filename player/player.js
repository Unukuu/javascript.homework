// audio

const playBtn = document.getElementById("playsong");
const boxEl = document.getElementsByClassName("picture")[0];
playBtn.addEventListener("click", () => {
  const audio = document.getElementsByTagName("audio")[0];
  audio.play();
  console.log("AUD", audio);
  boxEl.classList.toggle("rotate");
  playBtn.style.cont;
});
