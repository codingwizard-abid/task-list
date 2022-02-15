const taskForm = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.getElementById('task');

// load all event Listerner

loadAllEventListener();

// load all event listener

function loadAllEventListener(){
   taskForm.addEventListener('submit', addTask);
   taskList.addEventListener('click', removeTask);
   clearBtn.addEventListener('click', clearTask);
}

function addTask(e){
   if(taskInput.value === ''){
      alert('Please add a task!!');
   }
   const li = document.createElement('li');
   li.className = 'collection-item';
   li.appendChild(document.createTextNode(taskInput.value));
   const link = document.createElement('a');
   link.className = 'delete-item secondary-content';
   link.innerHTML = '<i class="fa fa-remove"></i>';
   li.appendChild(link);
   taskList.appendChild(li);

   taskInput.value = '';


   e.preventDefault();
}

function removeTask(e){
   if(e.target.parentElement.classList.contains('delete-item')){
      if(confirm('Are You Sure?')){
         e.target.parentElement.parentElement.remove();
      }
   }
}

function clearTask(){
   // taskList.innerHTML = '';
   while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
   }
}