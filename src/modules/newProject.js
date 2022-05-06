import { todoFull, projectNew } from './createProject';
import { displayTask } from './newTask';

// Modal DOM Elements
const modal = document.querySelector('.modal');
const editModal = document.querySelector('.edit-modal');
const trigger = document.querySelector('.projects-trigger');
const closeButton = document.querySelector('.close-modal-btn');
const closeEditButton = document.querySelector('.close-edit-btn');

// Project Creation DOM Elements
const getProjectForm = document.getElementById('addProject');
const getProjectInput = document.getElementById('proName');
const cancelProject = document.getElementById('cancelNewProject'); 
const projectParent = document.getElementById('projects');
const projectContainer = document.getElementById('projectList');
const errorMessage = document.getElementById('err-msg');

// Project Edit DOM Elements
const editFormCont = document.querySelector('.editProjectContainer');
const getEditForm = document.getElementById('editProject');
const editFormBtn = document.getElementById('editProjectBtn');
const cancelEditFormBtn = document.getElementById('cancelEditProject');
const editProjectInput = document.getElementById('editProName'); 

const defaultProject = new projectNew('Inbox');
const defaultProject2 = new projectNew('Home');

let userProject;


function toggleModal()
{
    modal.classList.toggle('show-modal');
}

function toggleEditModal()
{
    editModal.classList.toggle('show-modal');
}


function windowOnClick(e)
{
    if(e.target === modal)
    {
        toggleModal();
    }
    else if(e.target === editModal)
    {


        toggleEditModal();
    }
}

getProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validateEntry();

    getProjectForm.reset();
});


getEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    let pIndex = e.target.getAttribute('toUpdate');

    renameProject(pIndex);
});

function displayProject()
{
    let todoFull = JSON.parse(localStorage.getItem('todos')) || [defaultProject];
    
    projectContainer.innerHTML = '';

    todoFull.forEach((item, index) => {
        const listElement = document.createElement('li');
        
        listElement.id = index;
        listElement.innerHTML = item.projectName;

        if(index !== 0)
        {
            const renameButt = document.createElement('button');
            renameButt.innerHTML = 'Rename';

            renameButt.addEventListener('click', (e) => {
                e.preventDefault();

                toggleEditModal();

                editProjectInput.value = item.projectName;

                // editFormBtn.setAttribute('toUpdate', index);
                getEditForm.setAttribute('toUpdate', index);
            })

            listElement.appendChild(renameButt);

            const deleteButt = document.createElement('button');
            deleteButt.innerHTML = 'Delete';
            deleteButt.addEventListener('click', (e) => {
                todoFull.splice(index, 1);

                localStorage.setItem('todos', JSON.stringify(todoFull));

                displayProject();
                displayTask();
            });

            listElement.appendChild(deleteButt);
        }        
        

        projectContainer.appendChild(listElement);
    })

    localStorage.setItem('todos', JSON.stringify(todoFull));

    console.table(todoFull);
}

function validateEntry()
{
    let nameProject = getProjectInput.value;

    let todoFull = JSON.parse(localStorage.getItem('todos'));

    // check if the Project Name already exists
    let ans = todoFull.some(todo => todo.projectName === nameProject);

    if(ans === true)
    {
        errorMessage.innerHTML = 'This project name already exists.';
    }
    else
    {
        errorMessage.innerHTML = '';
        addProject();
    }
}

function addProject()
{
    let todoFull = JSON.parse(localStorage.getItem('todos'));

    let nameProject = getProjectInput.value;
    
    userProject = new projectNew(nameProject);
    // userProject.capProjectName();

    todoFull.push(userProject);

    localStorage.setItem('todos', JSON.stringify(todoFull));
    // render them to screen

    displayProject();
    
    toggleModal();
}


function renameProject(pIndex)
{
    let todoFull = JSON.parse(localStorage.getItem('todos'));
    
    let newName = editProjectInput.value;

    todoFull[pIndex]['projectName'] = newName;
    
    if(todoFull[pIndex]['projectTasks'].length >= 1)
    {
        todoFull[pIndex]['projectTasks'].forEach(task => {
            task.taskProject = newName;
        });
    }

    localStorage.setItem('todos', JSON.stringify(todoFull));

    displayProject();

    displayTask();

    toggleEditModal();
}


trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
cancelProject.addEventListener('click', toggleModal);

closeEditButton.addEventListener('click', toggleEditModal);
cancelEditFormBtn.addEventListener('click', toggleEditModal);

window.addEventListener('click', windowOnClick);

displayProject();
// displayTask();
// editFormBtn.addEventListener('click', renameProject);

