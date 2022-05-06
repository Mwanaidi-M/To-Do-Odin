import { createProject } from "./createProject";
import { createTask } from "./createTask";
import { formsDisplay } from "./forms";

let displayProject = (() => {

    // Project display container
    const projectContainer = document.getElementById('projectList');

    // Project edit form elements
    const getEditForm = document.getElementById('editProject');
    const editProjectInput = document.getElementById('editProName'); 

    // task heading
    const heading = document.getElementById('project-title');

    // task display container
    const taskContainer = document.getElementById('taskShow');

    // Task Edit DOM Elements
    const editTaskFormCont = document.querySelector('.editTaskContainer');
    const getTaskEditForm = document.getElementById('editTask');
    const editTaskBtn = document.getElementById('editTaskBtn');
    const editTitle = document.getElementById('editTaskTitle');
    const editDesc = document.getElementById('editTaskDesc');
    const editDueDate = document.getElementById('editTaskDue');
    const editPrio = document.getElementById('editTaskPrio');
    const editNotes = document.getElementById('editTaskNotes');
    const getTaskProject = document.getElementById('editTaskProject');

    // Show Message
    const msg = document.getElementById('p-msg');


    function defaultTaskDisplay(task)
    {
        const taskDiv = document.createElement('div');
        const taskDetail = document.createElement('details');
        const showTitle = document.createElement('summary');
        const showProjectName = document.createElement('span');
        const showDueDate = document.createElement('p');
        const showNotesP = document.createElement('p');
        // const optDiv = document.createElement('');
        const buttonEdit = document.createElement('button');
        const buttonDelete = document.createElement('button');
        
 
        showTitle.innerHTML = task.taskTitle;

        showProjectName.innerHTML = task.taskProject;

        showDueDate.innerHTML = `Due: ${task.taskDueDate}`;

        task.taskNotes === '' ? showNotesP.innerHTML = 'No notes available' : showNotesP.innerHTML = `Notes: ${task.taskNotes}`;
        
        let projectIndex = createProject.todoFull.findIndex(project => project.projectName === showProjectName.innerHTML);

        let taskIndex = createProject.todoFull[projectIndex]['projectTasks'].findIndex(pTask => pTask.taskTitle === showTitle.innerHTML );

        buttonEdit.innerHTML = 'Edit';
        buttonEdit.addEventListener('click', (e) => {
            
            formsDisplay.prefillProjectNames(getTaskProject);

            // console.log(`Project Index: ${projectIndex}`);
            // console.log(`Task Index: ${taskIndex}`);

            editTitle.value = task.taskTitle;
            editDueDate.value = task.taskDueDate;
            editPrio.value = task.taskPriority;
            editNotes.value = task.taskNotes;
            getTaskProject.value = task.taskProject;  
            
            // console.log(getTaskProject.value);
            

            formsDisplay.toggleEditTaskModal();

            getTaskEditForm.setAttribute('toUpdate', taskIndex);
        })

        buttonDelete.innerHTML = 'Delete';
        buttonDelete.addEventListener('click', (e) => {
            
            createTask.deleteTask(projectIndex, taskIndex);

            listTasks();
        })

        showTitle.append(showProjectName, buttonEdit, buttonDelete);
        taskDetail.append(showTitle, showDueDate, showNotesP);
        

        taskDiv.appendChild(taskDetail);

        taskContainer.appendChild(taskDiv);
    }

    function listTasks()
    {
        heading.innerHTML = '';
        msg.innerHTML = '';
        taskContainer.innerHTML = '';

        createProject.todoFull.forEach(project => {
            project.projectTasks.forEach((task, index) => {
                // console.log(task);
                defaultTaskDisplay(task);
            })
        })
    }


    function listProject()
    {
        projectContainer.innerHTML = '';

        createProject.todoFull.forEach((project, index) => {
            
            const listElement = document.createElement('li');
            const projectP = document.createElement('p');
            const projectBtnDiv = document.createElement('div');

            projectP.classList.add('todo-project');
            projectP.innerHTML = project.projectName;

            // console.log(projectP.innerHTML);
            // listElement.classList.add('todo-project');
            // listElement.innerHTML = project.projectName;
            listElement.append(projectP);
            projectContainer.appendChild(listElement);
            if(index !== 0)
            {
                const renameButt = document.createElement('button');
                renameButt.setAttribute('type', 'button');
                renameButt.innerHTML = 'Rename';
                renameButt.addEventListener('click', (e) => {

                    formsDisplay.toggleEditProjectModal();

                    editProjectInput.value = project.projectName;

                    getEditForm.setAttribute('toUpdate', index);
                });

                const deleteButt = document.createElement('button');
                deleteButt.setAttribute('type', 'button');
                deleteButt.innerHTML = 'Delete';
                deleteButt.addEventListener('click', (e) => {

                    // msg.innerHTML = '';
                    createProject.removeProject(index);

                    listProject();

                    listTasks();
                })

                projectBtnDiv.append(renameButt, deleteButt);
                listElement.append(projectBtnDiv);
            }
            
            projectP.addEventListener('click', (e) => {

                taskContainer.innerHTML = '';
                heading.innerHTML = '';
                // console.log(e.target.firstChild.textContent);
                // console.log(listElement.innerHTML);
                let nameProject = e.target.firstChild.textContent;

                let projectSpecific = createProject.todoFull.filter(pro => pro.projectName === nameProject);

                projectSpecific.forEach(specificP => {
                    // console.log(specificP.projectTasks);
                    if(specificP.projectTasks.length < 1)
                    {
                        msg.innerHTML = 'No tasks here';
                    }
                    else
                    {
                        msg.innerHTML = '';

                        specificP.projectTasks.forEach(task => {
                            defaultTaskDisplay(task);
                        })
                    }
                })
            })
        })
                
    }



    function renderSpecificProjectContent()
    {
        let allProjects = document.querySelectorAll('.todo-project');

        allProjects.forEach(project => {
            // taskContainer.innerHTML = '';

            project.addEventListener('click', (e) => {
                taskContainer.innerHTML = '';

                // console.log(e.target.firstChild.textContent);
                let nameProject = e.target.firstChild.textContent;

                let projectSpecific = createProject.todoFull.filter(pro => pro.projectName === nameProject);

                projectSpecific.forEach(specificP => {
                    // console.log(specificP.projectTasks);
                    if(specificP.projectTasks.length < 1)
                    {
                        msg.innerHTML = 'No tasks here';
                    }
                    else
                    {
                        msg.innerHTML = '';

                        specificP.projectTasks.forEach(task => {
                            defaultTaskDisplay(task);
                        })
                    }
                })
            })
        })
    }


    getEditForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let pIndex = e.target.getAttribute('toUpdate');
        let newProjectName = editProjectInput.value;

        createProject.editProjectName(pIndex, newProjectName);

        formsDisplay.toggleEditProjectModal();

        getEditForm.reset();

        listProject();

        listTasks();
    })

    getTaskEditForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let indexTask = e.target.getAttribute('toUpdate');
        let titleTask = editTitle.value;
        let dateTask = editDueDate.value;
        let priorityTask = editPrio.value; 
        let notesTask = editNotes.value;
        let projectTask = getTaskProject.value;

        createTask.editTask(indexTask,titleTask,dateTask,priorityTask,notesTask,projectTask);

        formsDisplay.toggleEditTaskModal();

        getTaskEditForm.reset();

        listTasks();

    })

    return {
        listProject,
        listTasks,
        defaultTaskDisplay
    }
    
})();

export {displayProject};