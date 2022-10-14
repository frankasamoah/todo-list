
// selecting the form
const todoForm = document.querySelector("#todo-Modal");

// selecting the input
const input = document.querySelector("#input");

// selecting the add button
const addButton = document.querySelector("#add-btn");

// selecting element to display todos
const displayTodos = document.querySelector('#display-todos');

const incomingList = document.querySelector('.incoming-list')


// const li = document.createElement('li');









const todoModal = () => {
  // adding event listener to prevent the forms behavior of submitting anytime we load page
    todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.className = 'add-list'
    
    li.textContent = input.value;

    incomingList.appendChild(li);

    input.value = ''
    // console.log(li);
    // console.log(input.value)
  })

};

addButton.addEventListener("click", todoModal)




// const showDate = document.querySelector(".show-date");


// const newInput = document.createElement('input');
// newInput.type = 'checkbox'
// console.log(newInput.type)

