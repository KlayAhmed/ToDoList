//--Selectors--//

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//X-Selectors-X//

//--Event Listeners--//

todoButton.addEventListener("click", addTodo);
filterOption.addEventListener("click", filterTodo);
todoList.addEventListener("click", deleteCheck);

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
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("item");
  todoDiv.appendChild(newTodo);
  //Check mark
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "<i class='fa fa-check'></i>";
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //Trash button
  const trashCan = document.createElement("button");
  trashCan.innerHTML = "<i class='fa fa-trash'></i>";
  trashCan.classList.add("trash-btn");
  todoDiv.appendChild(trashCan);
  //Append to todo-list
  todoList.appendChild(todoDiv);
  //Clear input
  todoInput.value = "";
}

function deleteCheck(e) {
  console.log(e.target);
  const item = e.target;
  const todo = item.parentElement;
  switch (item.classList[0]) {
    case "trash-btn":
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function () {
        todo.remove();
      });
      break;
    case "complete-btn":
      todo.classList.toggle("completed");
      break;
    default:
      alert("enter something");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//X-Funtions-X//
