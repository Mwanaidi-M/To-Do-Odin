import { todoFull, projectNew } from './createProject';

const getProjectForm = document.getElementById('addProject'); 
const getProjectInput = document.getElementById('proName');
const cancelProject = document.getElementById('cancelNewProject'); 
const projectParent = document.getElementById('projects');
const projectContainer = document.getElementById('projectList');


const defaultProject = new projectNew('Inbox');
const defaultProject2 = new projectNew('Home');

todoFull.push(defaultProject);
todoFull.push(defaultProject2);

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
