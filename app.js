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
document.addEventListener("DOMContentLoaded", getTodos);
//X-Event Listeners-X//

//--Functions--//

let addTodo = (e) => {
  //Preventing form from submitting
  e.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Save localStorage
  saveLocalTodo(todoInput.value);
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
};

let deleteCheck = (e) => {
  console.log(e.target);
  const item = e.target;
  const todo = item.parentElement;
  switch (item.classList[0]) {
    case "trash-btn":
      todo.classList.add("fall");
      removeLocalTodo(todo);
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
};

let filterTodo = (e) => {
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
};
//Check localStorage
let saveLocalTodo = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

//get todos
let getTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
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
  });
};

//Remove todos
let removeLocalTodo = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

//X-Funtions-X//
