//--Selectors--//

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//X-Selectors-X//

//--Event Listeners--//

todoButton.addEventListener("click", addTodo);

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

  if (todayInput.value == "") {
  }
}

function deleteCheck(e) {
  console.log(e.target);
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  } else if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  } else {
  }
}

//X-Funtions-X//
