//DOM elements
const Submit = document.getElementById("Submit");
const todoCon = document.getElementById("todoCon");
const inprocessCon = document.getElementById("inprocessCon");
const doneCon = document.getElementById("doneCon");
const blockedCon = document.getElementById("blockedCon");
const statusValue = document.getElementById("inputGroupSelect01");
const textInput = document.getElementById("textInput");
//other
let y = statusValue.value;
console.log(y);
function stat() {
  y = statusValue.value;
  console.log(y);
}

let taskArr = [];

function draw() {
  todoCon.innerHTML = "";
  inprocessCon.innerHTML = "";
  doneCon.innerHTML = "";
  blockedCon.innerHTML = "";

  for (let i = 0; i < taskArr.length; i++) {
    console.log("TASKS", taskArr);
    const newTaskCard = `
     <div
          class="rounded bg-secondary d-flex justify-content-between align-items-center px-3 py-2"
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked${i}"
            />
            <label class="form-check-label" for="flexCheckChecked${i}">
              ${taskArr[i].name}
            </label>
          </div>
          <span>
            <button 
            onclick="editorBtn(${i})"
            data-bs-toggle="modal"
          data-bs-target="#exampleModal" class="btn"><i class="fa-solid fa-pen"></i></button>
            <button class="btn" onclick = "deleteArr(${i})">
              <i class="fa-solid fa-trash-can" style="color: #ec0909"></i>
            </button>
          </span>
        </div>
 `;

    switch (taskArr[i].status) {
      case "Todo": {
        todoCon.innerHTML += newTaskCard;
        break;
      }
      case "Inprocess": {
        inprocessCon.innerHTML += newTaskCard;
        break;
      }
      case "Done": {
        doneCon.innerHTML += newTaskCard;
        break;
      }
      case "Blocked": {
        blockedCon.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}
Submit.addEventListener("click", () => {
  const newTask = {
    name: txt(),
    status: y,
  };
  taskArr.push(newTask);
  draw();
  txt();
});

function txt() {
  let gettext = textInput.value;
  return gettext;
}

function deleteArr(taskindex) {
  console.log(taskindex);
  taskArr.splice(taskindex, 1);
  draw();
}

function editorBtn(taskindex) {
  statusValue.value = taskArr[taskindex].status;
  textInput.value = taskArr[taskindex].name;
  console.log(taskindex);
  taskArr.splice(taskindex, 1);
  draw();
}
