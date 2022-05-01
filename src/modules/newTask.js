
import { todoFull, projectNew } from './createProject';
import { todoTasks } from './createTask';

const getTaskForm = document.getElementById('addTask');
const titleTask = document.getElementById('taskTitle');
const descTask = document.getElementById('taskDesc');
const dueTask = document.getElementById('taskDue');
const prioTask = document.getElementById('taskPrio');
const notesTask = document.getElementById('taskNotes');
const projTask = document.getElementById('taskProject');
const taskContainer = document.getElementById('showTasks');

let userTask;
let priorityOptions = ['Low', 'Medium', 'High'];

getTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addTask();

    getTaskForm.reset();
})

function prefilledValues()
{
    let todoFull = JSON.parse(localStorage.getItem('todos')) || [];

    prioTask.innerHTML = '';
    projTask.innerHTML = '';

    todoFull.forEach((project, index) => {
        const projOptions = document.createElement('option');
        projOptions.innerHTML = project['projectName'];
        projOptions.value = project['projectName'];

        projTask.appendChild(projOptions);
    });

    priorityOptions.forEach((priorityLevel) => {
    
        const priOptions = document.createElement('option');

        priOptions.innerHTML = priorityLevel;
        priOptions.value = priorityLevel;

        prioTask.appendChild(priOptions);
            
    });

    localStorage.setItem('todos', JSON.stringify(todoFull));
}
function displayTask()
{
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
            // readButton.classList.add('readBtn');
            // readButton.addEventListener('click', changeRead);
            updateTask.appendChild(editButton);
            taskRow.appendChild(updateTask);

            let removeTask = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'delete';
            // deleteButton.classList.add('deleteBtn');
            // deleteButton.addEventListener('click', removeBook);
            removeTask.appendChild(deleteButton);
            taskRow.appendChild(removeTask);

            taskContainer.appendChild(taskRow);
        })
    })
}
function addTask()
{
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
    console.table(userTask);

    displayTask();
}
prefilledValues();
displayTask();