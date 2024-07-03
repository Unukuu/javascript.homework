//DOM elements
const Submit = document.getElementById("Submit");
const todoCon = document.getElementById("todoCon");
const inprocessCon = document.getElementById("inprocessCon");
const doneCon = document.getElementById("doneCon");
const blockedCon = document.getElementById("blockedCon");
const statusValue = document.getElementById("inputGroupSelect01");
const textInput = document.getElementById("textInput");
let todotoo = document.getElementById("todotoo");
let inprocesstoo = document.getElementById("inprocesstoo");
let donetoo = document.getElementById("donetoo");
let blockedtoo = document.getElementById("blockedtoo");
//other
let todocounting = 0;
let progresscounting = 0;
let donecounting = 0;
let blockedcounting = 0;
let isEdited = false;
let editedIndex = -1;

let taskArr = [];

function draw() {
  todotoo.innerText = "0";
  donetoo.innerText = "0";
  inprocesstoo.innerText = "0";
  blockedtoo.innerText = "0";
  todocounting = 0;
  progresscounting = 0;
  donecounting = 0;
  blockedcounting = 0;
  todoCon.innerHTML = "";
  inprocessCon.innerHTML = "";
  doneCon.innerHTML = "";
  blockedCon.innerHTML = "";

  for (let i = 0; i < taskArr.length; i++) {
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
        todocounting += 1;
        todotoo.innerText = todocounting;
        break;
      }
      case "Inprocess": {
        inprocessCon.innerHTML += newTaskCard;
        progresscounting += 1;
        inprocesstoo.innerText = progresscounting;
        break;
      }
      case "Done": {
        doneCon.innerHTML += newTaskCard;
        donecounting += 1;
        donetoo.innerText = donecounting;
        break;
      }
      case "Blocked": {
        blockedCon.innerHTML += newTaskCard;
        blockedcounting += 1;
        blockedtoo.innerText = blockedcounting;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
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
  isEdited = true;
  console.log(isEdited);
  editedIndex = taskindex;
}

Submit.addEventListener("click", function () {
  if (isEdited) {
    taskArr[editedIndex].name = textInput.value;
    taskArr[editedIndex].status = statusValue.value;
    isEdited = false;
    console.log(isEdited);
  } else {
    const newTask = {
      name: textInput.value,
      status: statusValue.value,
    };
    taskArr.push(newTask);
  }
  draw();
});

function defaultVal() {
  isEdited = false;
  console.log(isEdited);
  textInput.value = "";
  statusValue.value = "Todo";
}
