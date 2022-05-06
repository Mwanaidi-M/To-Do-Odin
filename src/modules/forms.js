import { format} from 'date-fns';

import { createProject } from "./createProject";
import { createTask } from "./createTask";
import { displayProject } from "./todosDisplay";
import { displayDOM } from "./displayDom";

let formsDisplay = (() => {

    // Project Forms Modal Elements
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


    // Task Forms Modal Elements
    const taskTrigger = document.querySelector('#task-modal-trigger');
    const taskModal = document.querySelector('.task-modal');
    const editTaskModal = document.querySelector('.edit-task-modal');
    const closeTaskButton = document.querySelector('.close-btn');
    const closeEdit = document.querySelector('.close-edit');

    // const testBtn = document.getElementById('edit-trigger');

    // Task Creation DOM Elements
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
    const cancelEditTask = document.getElementById('cancelEditTaskBtn');


    // Limit selected date to today as a minimum
    const todayDate = Date.now();
    let limitToday = format(todayDate, 'YYY-MM-dd');

    dueTask.setAttribute('min', limitToday);
    editDueDate.setAttribute('min', limitToday);


    // toggle create project form
    function toggleCreateProjectModal()
    {
        modal.classList.toggle('show-modal');
    }

    // toggle edit project form
    function toggleEditProjectModal()
    {
        editModal.classList.toggle('show-modal');
    }


    // toggle create task form
    function toggleCreateTaskModal()
    {
        taskModal.classList.toggle('show-modal');
    }

    // toggle edit task form
    function toggleEditTaskModal()
    {
        editTaskModal.classList.toggle('show-modal');
    }


    function windowOnClick(e)
    {

        if(e.target == modal)
        {
            toggleCreateProjectModal();
        }
        else if(e.target == editModal)
        {
            toggleEditProjectModal();
            displayProject.listTasks();
        }
        else if(e.target == taskModal)
        {
            toggleCreateTaskModal();
        }
        else if(e.target == editTaskModal)
        {
            toggleEditTaskModal();
        }
        
    }

    function validateProjectEntry(pName)
    {

        if(createProject.todoFull.some(todo => todo.projectName === pName))
        {
            errorMessage.innerHTML = 'This project name already exists.';
        }
        else
        {
            errorMessage.innerHTML = '';

            createProject.addProject(pName);

            toggleCreateProjectModal();

            displayProject.listProject();

            displayProject.listTasks();

            // displayProject.renderSpecificProjectContent();
        }
    }


    function prefillProjectNames(sTag)
    {
        sTag.innerHTML = '';

        createProject.todoFull.forEach(project => {
            const projectOptions = document.createElement('option');

            projectOptions.innerHTML = project.projectName;
            projectOptions.value = project.projectName;

            sTag.appendChild(projectOptions);
        })
    }


    getProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let userProject = getProjectInput.value;

        validateProjectEntry(userProject);

        getProjectForm.reset();
    })


    getTaskForm.addEventListener('submit', (e) => {

        e.preventDefault();

        let userTitle = titleTask.value;
        let userDue = dueTask.value;
        let userPrio = prioTask.value;
        let userNotes = notesTask.value;
        let userProject = projTask.value;

        createTask.addTask(userTitle, userDue, userProject, userPrio, userNotes);

        getTaskForm.reset();

        toggleCreateTaskModal();

        displayProject.listTasks();


    })

    // Create Project Modal
    trigger.addEventListener('click', toggleCreateProjectModal);
    closeButton.addEventListener('click', toggleCreateProjectModal);
    cancelProject.addEventListener('click', toggleCreateProjectModal);

    // Edit project modal
    closeEditButton.addEventListener('click', toggleEditProjectModal);
    cancelEditFormBtn.addEventListener('click', toggleEditProjectModal);
    

    // Create Task  modal
    taskTrigger.addEventListener('click', (e) => {
        prefillProjectNames(projTask);

        toggleCreateTaskModal();
    });
    closeTaskButton.addEventListener('click', toggleCreateTaskModal);
    cancelNewTask.addEventListener('click', toggleCreateTaskModal);

    // editTaskModal.addEventListener('click', (e) => {

    //     prefillProjectNames(getTaskProject);

    //     // toggleEditTaskModal();
    // });

    closeEdit.addEventListener('click', toggleEditTaskModal);
    cancelEditTask.addEventListener('click', toggleEditTaskModal);

    window.addEventListener('click', windowOnClick);

    return {
        toggleEditProjectModal,
        toggleEditTaskModal,
        prefillProjectNames
    }
})();

export {formsDisplay};