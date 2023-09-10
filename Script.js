// Variáveis
let newTaskName = document.querySelector("#new-task__name");
const newTaskAdd = document.querySelector("#new-task__add");
const taskList = document.querySelector("#task-list");
const taskListName = document.querySelector("#task-list__name");
const taskListCheck = document.querySelector("#task-list__check");
const taskListDelete = document.querySelector("#task-list__delete");
const taskChecked = document.querySelector("#task-checked");
const taskListContainer = document.querySelector("#task-list__container");

let listArray = [];
let checkedArray = [];

// Functions
const emptyInpuy = () => newTaskName.value.trim().length > 0;

function colectTitle() {
  if (!emptyInpuy()) {
    newTaskName.classList.add("error");
    newTaskName.focus();
    return;
  }
  newTaskName.classList.remove("error");
  listArray.push(newTaskName.value.trim());

  createTaskList(taskList, listArray);
  newTaskName.value = "";
  newTaskName.focus();
}

function createTaskList(locateSection, locateArray, checkClass) {
  locateSection.innerHTML = "";

  locateArray.forEach(function (task, index) {
    // Div container
    const divTaskListContainer = document.createElement("div");
    divTaskListContainer.setAttribute("id", "task-list__container");
    divTaskListContainer.setAttribute("class", checkClass);

    // Input da tarefa
    const inputTaskListName = document.createElement("input");
    const inputAtributes = {
      class: "my-input",
      name: index,
      id: "task-list__name",
      type: "text",
      placeholder: "Editando nota",
      value: task,
    };
    for (const key in inputAtributes) {
      inputTaskListName.setAttribute(key, inputAtributes[key]);
    }

    // Icon checked
    const iconTaskListCheck = document.createElement("i");
    const iconCheck_Atributes = {
      id: "task-list__check",
      class: "bi",
      class: "bi-journal-check",
    };
    for (const key in iconCheck_Atributes) {
      iconTaskListCheck.setAttribute(key, iconCheck_Atributes[key]);
    }

    // Icon delete
    const iconTaskListDelete = document.createElement("i");
    const iconDelete_Atributes = {
      id: "task-list__delete",
      class: "bi",
      class: "bi-trash3",
    };
    for (const key in iconDelete_Atributes) {
      iconTaskListDelete.setAttribute(key, iconDelete_Atributes[key]);
    }
    divTaskListContainer.appendChild(inputTaskListName);
    divTaskListContainer.appendChild(iconTaskListCheck);
    divTaskListContainer.appendChild(iconTaskListDelete);

    locateSection.insertBefore(divTaskListContainer, locateSection.firstChild);
  });
}

function onChecked(parentEl) {
  const taskIndex = listArray.indexOf(
    parentEl.querySelector(".my-input").value
  );
  if (taskIndex !== -1) {
    //pega o valor da task checked
    const checkedValue = listArray[taskIndex];
    //insere na checkedArray
    checkedArray.push(checkedValue);
    //deleta da section task-list
    listArray.splice(taskIndex, 1);
    parentEl.remove();

    createTaskList(taskChecked, checkedArray, "checked");
  }
}

function onDelete(parentEl) {
  const taskIndex = listArray.indexOf(
    parentEl.querySelector(".my-input").value
  );

  if (taskIndex !== -1) {
    listArray.splice(taskIndex, 1);
    parentEl.remove();
  }
  console.log(taskIndex);
}

// Chamados && EventListeners
newTaskAdd.addEventListener("click", colectTitle);

taskList.addEventListener("click", (el) => {
  const targetEl = el.target;
  const parentEl = targetEl.closest("div");

  if (el.target.id === "task-list__check") {
    onChecked(parentEl);
  } else if (el.target.id === "task-list__delete") {
    onDelete(parentEl);
  }
});
