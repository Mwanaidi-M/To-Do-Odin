import { projectNew } from './createProject';

const getProjectInput = document.getElementById('proName');
const getProjectForm = document.getElementById('addProject'); 
const cancelProject = document.getElementById('cancelNewProject'); 
const projectParent = document.getElementById('projects');
const projectContainer = document.getElementById('projectList');


const todoFull = [];
const defaultProject = new projectNew('Inbox');

todoFull.push(defaultProject);

let userProject;

getProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addProject();

    getProjectForm.reset();
})

function displayProject()
{
    projectContainer.innerHTML = '';

    todoFull.forEach((item, index) => {
        const listElement = document.createElement('li');
        
        listElement.id = index;
        listElement.innerHTML = item.projectName;

        projectContainer.appendChild(listElement);
    })
    projectParent.append(projectContainer);

    console.table(todoFull);
}

function addProject()
{
    let nameProject = getProjectInput.value;

    userProject = new projectNew(nameProject);
    todoFull.push(userProject);

    displayProject();
}

displayProject();
