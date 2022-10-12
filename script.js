
// selecting the form
const todoForm = document.querySelector("#todo-Modal");

// selecting the input
const input = document.querySelector("#input");

// selecting the add button
const addButton = document.querySelector("#add-btn");

// selecting element to display todos
const displayTodos = document.querySelector('#display-todos');

const ul = document.createElement('ul');
console.log(ul)

const li = document.createElement('li');









const todoModal = () => {
  // adding event listener to prevent the forms behavior of submitting anytime we load page
    todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value)
  })

};

addButton.addEventListener("click", todoModal)




// const showDate = document.querySelector(".show-date");





