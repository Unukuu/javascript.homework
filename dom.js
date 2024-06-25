const boxEl = document.getElementsByClassName("box");
const btnEl = document.getElementsByTagName("button")[0];
const addbtn = document.getElementById("addbtn");
const change = document.getElementById("changebtn");

console.log(boxEl);
console.log(boxEl.lenght);

function randomcolor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);

  return `rgb(${rColor},${gColor},${bColor})`;
}

function changebackgroundcolor() {
  console.log("changed");
  for (let i = 0; i < boxEl.length; i++) {
    boxEl[i].style.backgroundColor = randomcolor();
    boxEl[i].style.color = randomcolor();
  }
  btnEl.style.backgroundColor = randomcolor();
}
btnEl.addEventListener("click", changebackgroundcolor);
addbtn.addEventListener("click", function () {
  const newBox = document.createElement("div");
  newBox.className = "box";

  const parent = document.getElementsByClassName("container")[0];

  parent.appendChild(newBox);
});
//change
change.addEventListener("click", () => {
  for (let i = 0; i < boxEl.length; i++) {
    boxEl[i].classList.toggle("big");
  }
});
