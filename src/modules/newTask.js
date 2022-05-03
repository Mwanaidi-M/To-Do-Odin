
import { todoFull, projectNew } from './createProject';
import { todoTasks } from './createTask';

const getTaskFormCont = document.querySelector('.addTaskContainer');
const getTaskForm = document.getElementById('addTask');
const titleTask = document.getElementById('taskTitle');
const descTask = document.getElementById('taskDesc');
const dueTask = document.getElementById('taskDue');
const prioTask = document.getElementById('taskPrio');
const notesTask = document.getElementById('taskNotes');
const projTask = document.getElementById('taskProject');
const taskContainer = document.getElementById('showTasks');


const editTaskFormCont = document.querySelector('.editTaskContainer');
const editTaskBtn = document.getElementById('editTaskBtn');
const editTitle = document.getElementById('editTaskTitle');
const editDesc = document.getElementById('editTaskDesc');
const editDueDate = document.getElementById('editTaskDue');
const editPrio = document.getElementById('editTaskPrio');
const editNotes = document.getElementById('editTaskNotes');
const getTaskProject = document.getElementById('editTaskProject');

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

    projTask.innerHTML = '';


    todoFull.forEach((project, index) => {
        const projOptions = document.createElement('option');
        projOptions.innerHTML = project['projectName'];
        projOptions.value = project['projectName'];

        projTask.appendChild(projOptions);
    });

    localStorage.setItem('todos', JSON.stringify(todoFull));
}
function displayTask()
{
    let todoFull = JSON.parse(localStorage.getItem('todos')) || [];
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
                getTaskFormCont.style.display = 'none';
                editTaskFormCont.style.display = 'block';

                editTitle.value = task.taskTitle;
                editDesc.value = task.taskDescription;
                editDueDate.value = task.taskDueDate;
                editPrio.value = task.taskPriority;
                editNotes.value = task.taskNotes;
                getTaskProject.value = task.taskProject;

                editTaskBtn.setAttribute('toUpdate', index);

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

                console.table(project.projectTasks);
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

function editTaskTodo(e)
{
    let todoFull = JSON.parse(localStorage.getItem('todos'));
    let taskIndex = e.target.getAttribute('toUpdate');
    let tProj = getTaskProject.value;
    let projectIndex = todoFull.findIndex((pro) => pro.projectName === tProj);

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

    getTaskFormCont.style.display = 'block';
    editTaskFormCont.style.display = 'none';
    // console.log(taskIndex);

    // console.log(todoFull[projectIndex]['projectTasks'][taskIndex]);
}

prefilledValues();
displayTask();

editTaskBtn.addEventListener('click', editTaskTodo);