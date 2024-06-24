const boxEl = document.getElementsByClassName("box")[0];
const btnEl = document.getElementsByTagName("button")[0];
console.log(boxEl);
console.log(btnEl);
const rColor = Math.floor(Math.random() * 256);
const gColor = Math.floor(Math.random() * 256);
const bColor = Math.floor(Math.random() * 256);

const colors = "rgb(" + rColor + ", " + gColor + " ," + bColor + ")";

function changebackgroundcolor() {
  console.log("changed");
  boxEl.style.backgroundColor = colors;
}

btnEl.addEventListener("click", changebackgroundcolor);
