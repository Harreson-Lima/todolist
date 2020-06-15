// get DOM variables
const addButton = document.querySelector('#btn-add');
var inputValue = document.querySelector('#input-todo');
const container = document.querySelector('#container ul');

// save todos
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


// render all todos, and clear the olds todos
function renderTodos(){
    //Create the todos
    container.innerHTML = "";

    for(let todo of todos){

        let itemList = document.createElement('li');
        itemList.classList.add('item-itemList');

        let inputLista = document.createElement('input');
        inputLista.value = todo;
        inputLista.disabled = true;
        inputLista.classList.add('input-list');
        
        let itemBox = document.createElement('div');
        itemBox.classList.add('box-list');

        let pos = todos.indexOf(todo);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.setAttribute('onclick', 'delet(' + pos + ')');

        let deleteImage = document.createElement("div");
        deleteImage.classList.add('delete-icon');
        deleteButton.appendChild(deleteImage);

        itemList.appendChild(inputLista);
        itemBox.appendChild(itemList);
        itemBox.appendChild(deleteButton);

        container.appendChild(itemBox);



    }
}

renderTodos();

// checks if the input is empty, and if not add a new todo
function check() {
    if(inputValue.value !== ""){
        todos.push(inputValue.value);
        inputValue.value = "";
        renderTodos();
        saveTodos();
    }
}

// remove the todo selected
function delet(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveTodos();
}




    
addButton.addEventListener('click', check);

// add todo with key dwon the enter
window.addEventListener('keydown', e => {
    if(e.which === 13) {
        check();
    }
})

// save the todos in local storage
function saveTodos(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}