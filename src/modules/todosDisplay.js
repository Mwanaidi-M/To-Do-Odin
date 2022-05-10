import { createProject } from "./createProject";
import { createTask } from "./createTask";
import { formsDisplay } from "./forms";

import {format, parseISO} from 'date-fns';

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


    /** function to display the project on the frontend;
     * each project will have an edit and delete button;
     * when the edit button is clicked, it will open the edit form modal and show the current value;
     * for the edit button an attribute is added for the index that will be updated;
     * when the delete button is clicked, it will remove the project from the frontend and localStorage;
     * each projectName when clicked, will display the tasks related to that project.
     */
    function listProject()
    {
        projectContainer.innerHTML = '';

        createProject.todoFull.forEach((project, index) => {
            
            // const listElement = document.createElement('li');
            const listElement = document.createElement('div');
            const projectP = document.createElement('p');
            const projectBtnDiv = document.createElement('div');

            projectP.classList.add('todo-project');
            projectP.innerHTML = project.projectName;

            projectBtnDiv.classList.add('project-edit-buttons');

            // console.log(projectP.innerHTML);
            // listElement.classList.add('todo-project');
            // listElement.innerHTML = project.projectName;
            listElement.append(projectP);
            projectContainer.appendChild(listElement);
            if(index !== 0)
            {
                const renameButt = document.createElement('button');
                renameButt.setAttribute('type', 'button');
                renameButt.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
            </svg>`;
                // renameButt.innerHTML = 'Rename';
                renameButt.addEventListener('click', (e) => {

                    formsDisplay.toggleEditProjectModal();

                    editProjectInput.value = project.projectName;

                    getEditForm.setAttribute('toUpdate', index);
                });

                const deleteButt = document.createElement('button');
                deleteButt.setAttribute('type', 'button');
                deleteButt.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#be123c" d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19M8,19H16V12.2L10.46,9H8V19Z" />
            </svg>`;
                // deleteButt.innerHTML = 'Delete';
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

                        specificP.projectTasks.forEach((task,ind) => {
                            defaultTaskDisplay(task, ind);
                        })
                    }
                })
            })
        })
                
    }


    /** function for the default display layout of the tasks
     * each task will have an edit and delete button as well;
     * for the edit button an attribute is added for the index that will be updated;
     */
    function defaultTaskDisplay(task, ind)
    {
        const taskDiv = document.createElement('div');
        const taskDetail = document.createElement('details');
        const showTitle = document.createElement('summary');
        const summaryDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const buttonsDiv = document.createElement('div'); 
        const showProjectName = document.createElement('span');
        const showDueDate = document.createElement('p');
        const showNotesP = document.createElement('p');
        // const optDiv = document.createElement('');
        const buttonEdit = document.createElement('button');
        const buttonDelete = document.createElement('button');
        
        // adjusted the display format for the date
        let dateFormatDisplay = format(parseISO(task.taskDueDate) , 'do MMM YYY');
 
        // showTitle.innerHTML = task.taskTitle;

        titleDiv.innerHTML = task.taskTitle;
        titleDiv.classList.add('title');

        showProjectName.innerHTML = task.taskProject;

        // color the projectName based on the priority level set for the task
        if(task.taskPriority === 'Low')
        {
            showProjectName.style.backgroundColor = '#4ade80';
        }
        else if(task.taskPriority === 'Medium')
        {
            showProjectName.style.backgroundColor = '#fbbf24';
        }
        else
        {
            showProjectName.style.backgroundColor = '#f87171';
        }

        showDueDate.innerHTML = `Due: ${dateFormatDisplay}`;

        task.taskNotes === '' ? showNotesP.innerHTML = 'No notes available' : showNotesP.innerHTML = `Notes: ${task.taskNotes}`;
        
        let projectIndex = createProject.todoFull.findIndex(project => project.projectName === showProjectName.innerHTML);

        let taskIndex = ind;


        buttonsDiv.classList.add('butts');
        
        buttonEdit.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="#4b5563" d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z" />
    </svg>`;
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
            
            // let taskIndex = ind;

            formsDisplay.toggleEditTaskModal();

            getTaskEditForm.setAttribute('toUpdate', taskIndex);
        })

        buttonDelete.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="#dc2626" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
    </svg>`;
        buttonDelete.addEventListener('click', (e) => {
            
            createTask.deleteTask(projectIndex, taskIndex);

            listTasks();
        })

        titleDiv.append(showProjectName);
        buttonsDiv.append(buttonEdit, buttonDelete);
        summaryDiv.append(titleDiv, buttonsDiv);
        showTitle.append(summaryDiv);
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
                defaultTaskDisplay(task, index);
            })
        })
    }

    /** when the edit project form is submitted, get the new value;
     * call the edit project function;
     * toggle the form modal;
     * reset the form;
     * call the project and task display functions to display the current items in the array
     */
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

    /** when task edit form is submitted, gather all input;
     * call the task edit function;
     * toggle the task edit form modal;
     * reset the form;
     * call the list display function to show the updated tasks from the array.
     */
    getTaskEditForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const indexTask = e.target.getAttribute('toUpdate');
        const titleTask = editTitle.value;
        const dateTask = editDueDate.value;
        const priorityTask = editPrio.value; 
        const notesTask = editNotes.value;
        const projectTask = getTaskProject.value;

        createTask.editTask(indexTask,titleTask,dateTask,priorityTask,notesTask,projectTask);

        formsDisplay.toggleEditTaskModal();

        getTaskEditForm.reset();

        listTasks();

        // console.log(`${indexTask}-${titleTask}-${dateTask}-${priorityTask}-${notesTask}-${projectTask}`);

    })

    return {
        listProject,
        listTasks,
        defaultTaskDisplay
    }
    
})();

export {displayProject};