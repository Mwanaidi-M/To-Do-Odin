import { todoFull, projectNew } from './createProject';

const getProjectForm = document.getElementById('addProject'); 
const getProjectInput = document.getElementById('proName');
const cancelProject = document.getElementById('cancelNewProject'); 
const projectParent = document.getElementById('projects');
const projectContainer = document.getElementById('projectList');

let userProject;

getProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addProject();

    getProjectForm.reset();
})

function displayProject()
{
    let todoFull = JSON.parse(localStorage.getItem('todos')) || [];
    
    projectContainer.innerHTML = '';

    todoFull.forEach((item, index) => {
        const listElement = document.createElement('li');
        
        listElement.id = index;
        listElement.innerHTML = item.projectName;

        projectContainer.appendChild(listElement);
    })
    projectParent.append(projectContainer);

    localStorage.setItem('todos', JSON.stringify(todoFull));

    console.table(todoFull);
}

function addProject()
{
    let nameProject = getProjectInput.value;
    const todoFull = JSON.parse(localStorage.getItem('todos'));

    userProject = new projectNew(nameProject);
    todoFull.push(userProject);

    localStorage.setItem('todos', JSON.stringify(todoFull));
    // render them to screen
    displayProject();

}

displayProject();
