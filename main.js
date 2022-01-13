const newTask = document.querySelector('#task-entry');
const addBtn = document.querySelector('#add-btn');
const taskList = document.querySelector('#task-list');
const removeBtns = document.querySelectorAll('.remove');
const removeAllBtn = document.querySelector('#remove-all');

//add task to task list
addBtn.addEventListener('click', addTask);

function addTask(){
    const newListItem = document.createElement('li');
    newListItem.classList.add('pending-task');

    const checkmark = document.createElement('span');
    checkmark.innerHTML = '&#10003;';
    checkmark.classList.add('checkmark');
    checkmark.style.visibility = 'hidden';

    const text = document.createElement('span');
    text.innerHTML = `${newTask.value}`;

    const crossmark = document.createElement('span');
    crossmark.innerHTML = '<b>&times;</b>';
    crossmark.classList.add('remove');
    crossmark.addEventListener('click', removeTask);

    newListItem.append(checkmark, text, crossmark);

    taskList.appendChild(newListItem);

    //clear input
    newTask.value = '';
}

//remove individual task
function removeTask(){
    this.parentNode.className = 'removed-task';
    this.parentNode.firstChild.style.visibility = 'visible';
    this.parentNode.childNodes[1].style.textDecoration = 'line-through';
}

//remove all
removeAllBtn.addEventListener('click', removeAll);

function removeAll(){
    const pendings = document.querySelectorAll('.pending-task');
    
    for (let pending of pendings){
        pending.className = 'removed-task';

        pending.firstChild.style.visibility = 'visible';
        //Why does this line above not work?
        //console.log(pending.firstChild.value) shows "undefined" instead of a checkmark. Why?
        
        //pending.firstChild.innerHTML = '&#10003;';
        //even after setting innerHTML value again, the checkmark still doesn't show up.
        //Visibility still cannot be changed from "hidden" to "visible".
        //console.log(pending.firstChild.value) still shows "undefined". 

        pending.childNodes[1].style.textDecoration = 'line-through';
    }
}