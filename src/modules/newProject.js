import { todoFull, projectNew } from './createProject';

const getProjectForm = document.getElementById('addProject');
const getProjectInput = document.getElementById('proName');
const cancelProject = document.getElementById('cancelNewProject'); 
const projectParent = document.getElementById('projects');
const projectContainer = document.getElementById('projectList');

const editFormCont = document.querySelector('.editProjectContainer');
const editFormBtn = document.getElementById('editProjectBtn');
const cancelEditFormBtn = document.getElementById('cancelEditProject');
const editProjectInput = document.getElementById('editProName'); 

// editFormCont.style.display = 'none';

let userProject;

const defaultProject = new projectNew('Inbox');
const defaultProject2 = new projectNew('Home');

getProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addProject();

    getProjectForm.reset();
})

// [defaultProject, defaultProject2]



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
                editFormCont.style.display = 'block';

                editProjectInput.value = item.projectName;

                editFormBtn.setAttribute('toUpdate', index);
            })

            listElement.appendChild(renameButt);

            const deleteButt = document.createElement('button');
            deleteButt.innerHTML = 'Delete';
            deleteButt.addEventListener('click', (e) => {
                todoFull.splice(index, 1);
                
                localStorage.setItem('todos', JSON.stringify(todoFull));

                displayProject();
            });

            listElement.appendChild(deleteButt);
        }        
        

        projectContainer.appendChild(listElement);
    })

    localStorage.setItem('todos', JSON.stringify(todoFull));

    console.table(todoFull);
}



function addProject()
{
    let nameProject = getProjectInput.value;

    let todoFull = JSON.parse(localStorage.getItem('todos'));

    userProject = new projectNew(nameProject);

    userProject.capProjectName();

    todoFull.push(userProject);

    localStorage.setItem('todos', JSON.stringify(todoFull));
    // render them to screen
    displayProject();

}


function renameProject(e)
{
    let todoFull = JSON.parse(localStorage.getItem('todos'));
    let pIndex = e.target.getAttribute('toUpdate');
    let newName = editProjectInput.value;

    todoFull[pIndex]['projectName'] = newName;

    localStorage.setItem('todos', JSON.stringify(todoFull));

    displayProject();

    editFormCont.style.display = 'none';
}

function cancelEditProject()
{
    editFormCont.style.display = 'none';
}

displayProject();

editFormBtn.addEventListener('click', renameProject);
cancelEditFormBtn.addEventListener('click', cancelEditProject);