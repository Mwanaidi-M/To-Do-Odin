import { format} from 'date-fns'
import { todoFull, projectNew } from './createProject';
import { todoTasks } from './createTask';

// task DOM elements
const trigger = document.querySelector('#task-modal-trigger');
const modal = document.querySelector('.task-modal');
const editModal = document.querySelector('.edit-task-modal');
const closeButton = document.querySelector('.close-btn');
const closeEdit = document.querySelector('.close-edit');

const getTaskFormCont = document.querySelector('.addTaskContainer');
const getTaskForm = document.getElementById('addTask');
const titleTask = document.getElementById('taskTitle');
const descTask = document.getElementById('taskDesc');
const dueTask = document.getElementById('taskDue');
const prioTask = document.getElementById('taskPrio');
const notesTask = document.getElementById('taskNotes');
const projTask = document.getElementById('taskProject');
const cancelNewTask = document.getElementById('cancelNewTask');
const taskContainer = document.getElementById('showTasks');


const editTaskFormCont = document.querySelector('.editTaskContainer');
const getEditForm = document.getElementById('editTask');
const editTaskBtn = document.getElementById('editTaskBtn');
const editTitle = document.getElementById('editTaskTitle');
const editDesc = document.getElementById('editTaskDesc');
const editDueDate = document.getElementById('editTaskDue');
const editPrio = document.getElementById('editTaskPrio');
const editNotes = document.getElementById('editTaskNotes');
const getTaskProject = document.getElementById('editTaskProject');


const displayAllTodos = document.getElementById('all');
const displayInbox = document.getElementById('inb');
const heading = document.getElementById('project-title');
const msg = document.getElementById('p-msg');


let userTask;

const todayDate = Date.now();
let formatToday = format(todayDate, 'YYY-MM-dd');

dueTask.setAttribute('min', formatToday);
editDueDate.setAttribute('min', formatToday);

const defaultProject = new projectNew('inbox');

function showModal()
{
    modal.classList.toggle('show-modal');
}

function showEditModal()
{
    editModal.classList.toggle('show-modal');
}

function windowOnClick(e)
{
    if(e.target === modal)
    {
        showModal();
    }
    else if(e.target === editModal)
    {
        showEditModal();
    }
}

trigger.addEventListener('click', (e) => {

    prefilledValues();

    showModal();
});

getTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addTask();

    showModal();

    getTaskForm.reset();
})

getEditForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let taskIndex = e.target.getAttribute('toUpdate');

    editTaskTodo(taskIndex);

    showEditModal();
});

function prefilledValues()
{
    // displayProject();
    // let todoFull = JSON.parse(localStorage.getItem('todos')) || [defaultProject];

    let todoFull = JSON.parse(localStorage.getItem('todos'));

    projTask.innerHTML = '';

    todoFull.forEach((project, index) => {
        const projOptions = document.createElement('option');
        projOptions.innerHTML = project['projectName'];
        projOptions.value = project['projectName'];

        projTask.appendChild(projOptions);
    });

    localStorage.setItem('todos', JSON.stringify(todoFull));
}

function prefilledEditValues()
{
    // displayProject();
    // let todoFull = JSON.parse(localStorage.getItem('todos')) || [defaultProject];

    let todoFull = JSON.parse(localStorage.getItem('todos'));

    getTaskProject.innerHTML = '';

    todoFull.forEach((project, index) => {
        const projOptions = document.createElement('option');
        projOptions.innerHTML = project['projectName'];
        projOptions.value = project['projectName'];

        getTaskProject.appendChild(projOptions);
    });

    // console.table(todoFull);
    localStorage.setItem('todos', JSON.stringify(todoFull));
}


function displayTask()
{
    let todoFull = JSON.parse(localStorage.getItem('todos')) || [defaultProject];
    taskContainer.innerHTML = '';

    todoFull.forEach((project, index) => {

        // const taskRow = document.createElement('tr');
        // taskRow.innerHTML = '';
        project.projectTasks.forEach((task, index) => {
            const taskRow = document.createElement('tr');

            for(const key in task)
            {
                const taskData = document.createElement('td');
                taskData.innerHTML = task[key];
                taskRow.appendChild(taskData);
                taskContainer.appendChild(taskRow);
            }

            let updateTask = document.createElement('td');
            const editButton = document.createElement('button');
            editButton.innerText = 'update';
            editButton.addEventListener('click', (e) => {

                showEditModal();

                prefilledEditValues();
                // getTaskFormCont.style.display = 'none';
                // editTaskFormCont.style.display = 'block';

                editTitle.value = task.taskTitle;
                editDesc.value = task.taskDescription;
                editDueDate.value = task.taskDueDate;
                editPrio.value = task.taskPriority;
                editNotes.value = task.taskNotes;
                getTaskProject.value = task.taskProject;

                // editTaskBtn.setAttribute('toUpdate', index);
                getEditForm.setAttribute('toUpdate', index);

            })
            // readButton.classList.add('readBtn');
            updateTask.appendChild(editButton);
            taskRow.appendChild(updateTask);

            let removeTask = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'delete';
            deleteButton.addEventListener('click', (e) => {
                project.projectTasks.splice(index, 1);

                localStorage.setItem('todos', JSON.stringify(todoFull));

                displayTask();

                console.table(todoFull);
            })
            // deleteButton.classList.add('deleteBtn');
            removeTask.appendChild(deleteButton);
            taskRow.appendChild(removeTask);

            taskContainer.appendChild(taskRow);
        });
    });

    localStorage.setItem('todos', JSON.stringify(todoFull));
}


function addTask()
{
    let todoFull = JSON.parse(localStorage.getItem('todos'));

    const title = titleTask.value;
    const desc = descTask.value;
    const tDate = dueTask.value;
    const prio = prioTask.value;
    const tNotes = notesTask.value;
    const tProj = projTask.value;

    userTask = new todoTasks(title, desc, tDate, prio, tNotes, tProj);

    let projectIndex = todoFull.findIndex(pInd => pInd.projectName === tProj);
    todoFull[projectIndex].projectTasks.push(userTask);

    console.table(todoFull);
    // console.table(userTask);

    localStorage.setItem('todos', JSON.stringify(todoFull));

    displayTask();
}

function editTaskTodo(taskIndex)
{
    let todoFull = JSON.parse(localStorage.getItem('todos'));
    // let taskIndex = e.target.getAttribute('toUpdate');
    let tProj = getTaskProject.value;
    let projectIndex = todoFull.findIndex((pro) => pro.projectName === tProj);

    // console.table(todoFull);
    const title = editTitle.value;
    const desc = editDesc.value;
    const tDate = editDueDate.value;
    const prio = editPrio.value;
    const tNotes = editNotes.value;

    todoFull[projectIndex]['projectTasks'][taskIndex]['taskTitle'] = title;
    todoFull[projectIndex]['projectTasks'][taskIndex]['taskDescription'] = desc;
    todoFull[projectIndex]['projectTasks'][taskIndex]['taskDueDate'] = tDate;
    todoFull[projectIndex]['projectTasks'][taskIndex]['taskPriority'] = prio;
    todoFull[projectIndex]['projectTasks'][taskIndex]['taskNotes'] = tNotes;

    localStorage.setItem('todos', JSON.stringify(todoFull));
    
    displayTask();

    // console.log(taskIndex);

}

// displayTask();

// editTaskBtn.addEventListener('click', editTaskTodo);

window.addEventListener('click', windowOnClick);
closeButton.addEventListener('click', showModal);
closeEdit.addEventListener('click', showEditModal);
cancelNewTask.addEventListener('click', showModal);

export {displayTask};