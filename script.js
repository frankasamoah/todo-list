// SELECTORS
// const todoForm = document.querySelector('#todo-Modal')
const input = document.querySelector("#input");
const addButton = document.querySelector("#add-btn");
const displayTodos = document.querySelector("#display-todos");
const todoList = document.querySelector(".todo-list");
const showDate = document.querySelector('.show-date');
// const checkButton = document.querySelector(".check-btn");
// const editButton = document.querySelector(".edit-btn");
// const deleteButton = document.querySelector(".delete-btn");

const progress = document.querySelector('.progress');
const progressDone = document.querySelector('.progress-done');
const minInput = document.querySelector('.min-input');
const maxInput= document.querySelector('.max-input');

let finalValue = 0;
let max = 0;

function changeWidth() {
  // want to find what percentage is the progree done to the total todos
  // what percentage is the progress done to the progress

  progress.style.width = `${
    (finalValue/max) * 100
  }%`
  progress.innerHTML = `${Math.ceil((finalValue/max) * 100
  )}%`
}

minInput.addEventListener('keyup', function() {
  // we set the values from the input to integers so that we can 
  // work the percentages ...radix of 10
  finalValue = parseInt(minInput.value, 10);

  // call the changeWidth function here
//  console.log(finalValue);
changeWidth()
});

maxInput.addEventListener('keyup', function() {
  // we set the values from the input to integers so that we can 
  // work the percentages ...radix of 10
  max = parseInt(maxInput.value, 10);
  // console.log(max);
  changeWidth()
})

// EVENT LISTENERS

addButton.addEventListener("click", addToDo);

todoList.addEventListener("click", actionsOnToDo)

// console.log(todoList);



// FUNCTIONS

function addToDo(e) {
  
  
     // prevent the forms behavior of submitting anytime we load page
  e.preventDefault();
  
  // div to contain todo
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

// check button
const checkButton = document.createElement("button");
checkButton.innerHTML = `<i class="fas fa-square-check"></i>`;
checkButton.classList.add("check-btn");
todoDiv.appendChild(checkButton);

// list item
const todoItem = document.createElement("li");
todoItem.innerText = input.value;
todoItem.classList.add("todo-item");
todoDiv.appendChild(todoItem);


// add input values into localStorage
saveToLocalSorage(input.value);

// edit button
const editButton = document.createElement("button");

editButton.innerHTML = `<i class="fas fa-pencil"></i>`;

editButton.classList.add("edit-btn");
todoDiv.appendChild(editButton);

// delete button
const deleteButton = document.createElement("button");

deleteButton.innerHTML = `<i class="fas fa-xmark"></i>`;

deleteButton.classList.add("delete-btn");
todoDiv.appendChild(deleteButton);

todoList.appendChild(todoDiv);



input.value = "";
}
  
  
  


function actionsOnToDo(e) {
  const item = e.target;
  console.log(item);

  const todo = item.parentElement
  // console.log(todo);
  if(item.classList[0] === 'check-btn') {
    todo.classList.toggle('complete');
    // console.log("checked");
  };

  if(item.classList[0] === 'edit-btn') {
    const newInputDiv = document.createElement('div');
    newInputDiv.classList.add('new-input_div')

    const newIput = document.createElement('input');
    input.classList.add('new-input');
    displayTodos.classList.toggle('column-display');
    displayTodos.prepend(newIput);
    const todoItem = document.querySelector('.todo-item');
     const todoInnerText = todoItem.innerText;
    newIput.value = todoInnerText;

    function editInput(e) {
      todoItem.textContent = e.target.value;
    
    }

    newIput.addEventListener('change', editInput);
    
    // newIput.value = '';
    newIput.classList.toggle('input-disappear');


   
    // console.log("edited");
  };

  if(item.classList[0] === 'delete-btn') {
    todo.remove()
    // console.log("deleted");
  };
}


function saveToLocalSorage(todo) {
  // if local storage doesn't exit, storage is set to an empty array
  let storage = JSON.parse(localStorage.getItem('storage')) || [];

  // input values are pushed into the data array
   storage.push(todo);

  //saving storage array back into localStorage
   localStorage.setItem('storage', JSON.stringify(storage));
}


function progressBar() {

}