// SELECTORS

const input = document.querySelector("#input");
const addButton = document.querySelector("#add-btn");
const displayTodos = document.querySelector("#display-todos");
const todoList = document.querySelector(".todo-list");
const showDate = document.querySelector('.show-date');
// const checkButton = document.querySelector(".check-btn");
// const editButton = document.querySelector(".edit-btn");
// const deleteButton = document.querySelector(".delete-btn");

// EVENT LISTENERS

addButton.addEventListener("click", addToDo);

todoList.addEventListener("click", actionsOnToDo)



// FUNCTIONS

function addToDo(e) {
  // prevent the forms behavior of submitting anytime we load page
  e.preventDefault();

  // div to contain todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // check button
  const checkButton = document.createElement("button");
  checkButton.setAttribute('type', 'checkbox');
  checkButton.classList.add("check-btn");
  todoDiv.appendChild(checkButton);

  // list item
  const todoItem = document.createElement("li");
  todoItem.innerText = input.value;
  todoItem.classList.add("todo-item");
  todoDiv.appendChild(todoItem);

  // edit button
  const editButton = document.createElement("button");

  editButton.innerHTML = `<i class="fas fa-pencil"></i>`;

  editButton.classList.add("edit-btn");
  todoDiv.appendChild(editButton);

  // delete button
  const deleteButton = document.createElement("button");

  deleteButton.innerHTML = `<i class="fas fa-cancel"></i>`;

  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);



  input.value = "";
}

function actionsOnToDo(e) {
  const item = e.target;
  console.log(item);
}


