// Variáveis
let newTaskName = document.querySelector("#new-task__name");
const newTaskAdd = document.querySelector("#new-task__add");
const taskList = document.querySelector("#task-list");
const taskListName = document.querySelector("#task-list__name");

let jaExiste = false;

// Functions
function colectTitle() {
  if (newTaskName.value === "") {
    newTaskName.focus();
    return;
  }

  const tasksListArray = Array.from('myinput');
console.log(tasksListArray);
  const jaExisteArray = tasksListArray.some(function (input) {
    return input.value === newTaskName.value;
  });

  if (jaExisteArray) {
    alert("Ja existe");
  } else {
    alert("ta de boa");
  }

  createTaskList();
  newTaskName.value = "";
  newTaskName.focus();
}

function createTaskList() {
  // Div container
  const divTaskListContainer = document.createElement("div");
  divTaskListContainer.setAttribute("id", "task-list__container");

  // Input da tarefa
  const inputTaskListName = document.createElement("input");
  const inputAtributes = {
	class: "myinput",
    id: "task-list__name",
    type: "text",
    placeholder: "Editando sua tarefa",
    value: newTaskName.value,
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

  taskList.appendChild(divTaskListContainer);
  divTaskListContainer.appendChild(inputTaskListName);
  divTaskListContainer.appendChild(iconTaskListCheck);
  divTaskListContainer.appendChild(iconTaskListDelete);
}

// Chamados && EventListeners
newTaskAdd.addEventListener("click", colectTitle);
