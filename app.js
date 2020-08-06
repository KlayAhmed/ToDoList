//--Selectors--//

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//X-Selectors-X//

//--Event Listeners--//

todoButton.addEventListener("click", addTodo);

//X-Event Listeners-X//

//--Functions--//

function addTodo(event) {
  //Preventing form from submitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("item");
  todoDiv.appendChild(newTodo);
  //Check mark
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fa fa-check'></i>";
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);
  //Trash button
  const trashCan = document.createElement("button");
  trashCan.innerHTML = "<i class='fa fa-trash'></i>";
  trashCan.classList.add("trash-btn");
  todoDiv.appendChild(trashCan);
  //Append to todo-list
  todoList.appendChild(todoDiv);
}

//X-Funtions-X//
