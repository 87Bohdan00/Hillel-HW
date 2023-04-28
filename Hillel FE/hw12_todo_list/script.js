const addTaskButton = document.getElementById('add');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('description');
const selectPriority = document.getElementById('select');
const taskList = document.getElementById('tasks');

addTaskButton.addEventListener('click', addTask);

function addTask() {
   const title = titleInput.value;
   const description = descInput.value;
   const select = selectPriority.value;

   if (title.trim() === '' || description.trim() === '') {
    alert('Enter a title and description for your task');
    return;
 }

   const newTask = document.createElement('div');
   const newTitle = document.createElement('h3');
   const newDesc = document.createElement('p');
   const newTaskButtonRemove = document.createElement('button');
   const newTaskCheckbox = document.createElement('input');

   newTaskCheckbox.setAttribute('type', 'checkbox');

   newTitle.textContent = title;
   newDesc.textContent = description;
   newTask.classList.add(select.toLowerCase());

   taskList.appendChild(newTask);
   newTask.appendChild(newTaskCheckbox);
   newTask.appendChild(newTitle);
   newTask.appendChild(newDesc);

   newTaskCheckbox.addEventListener('click', function onDoneTask() {
      newTitle.classList.toggle('checked');
      newDesc.classList.toggle('checked');

      if (!newTask.contains(newTaskButtonRemove)) {
         newTaskButtonRemove.textContent = 'Delete';
         newTask.appendChild(newTaskButtonRemove);
         newTaskButtonRemove.addEventListener('click', function onDeleteElem() {
            newTask.remove();
         });
      } else {
         newTaskButtonRemove.remove();
      }
   });

   titleInput.value = '';
   descInput.value = '';
   selectPriority.value = 'Low';
}