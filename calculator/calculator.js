const btns = document.getElementsByClassName("btn-num");
const operators = document.getElementsByClassName("btn-op");
const btnEq = document.getElementsByClassName("btn-equal")[0];
const screenCon = document.getElementById("screenCon");

let plusClick = true;
let a = 0;
let c = 0;
let operator = "";
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    screenCon.textContent += btns[i].textContent;
  });
}

for (let idx = 0; idx < operators.length; idx++) {
  operators[idx].addEventListener("click", () => {
    operator = operators[idx].textContent;
    a = screenCon.textContent;
    screenCon.textContent = "";
  });
}

btnEq.addEventListener("click", () => {
  if (operator === "+") {
    c = Number(a) + Number(screenCon.textContent);
  }
  screenCon.textContent = c;
});
