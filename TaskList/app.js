const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);    
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task please!!');
    }
    // creates li
    const li = document.createElement('li');
    // adds class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // appened link to li
    li.appendChild(link);

    // append LI to UL
    taskList.appendChild(li);

    //clear input
    taskInput.value = ''

    e.preventDefault();
}