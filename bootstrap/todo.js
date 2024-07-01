//DOM elements
const Submit = document.getElementById("Submit");

//other
let x = 0;
let taskArr = [];
Submit.addEventListener("click", () => {
  const newTask = {status: x,
    name: ,
  }
  taskArr.push(newTask);
  console.log(taskArr);
});

function fvalue() {
  x = document.getElementById("inputGroupSelect01").value;
}
