// Module to handle display of form modals for the project and tasks

import { format } from "date-fns";

import { createProject } from "./createProject";
import { createTask } from "./createTask";
import { displayProject } from "./todosDisplay";

const formsDisplay = (() => {
  // Project Forms Modal Elements
  const modal = document.querySelector(".modal");
  const editModal = document.querySelector(".edit-modal");
  const trigger = document.querySelector(".projects-trigger");
  const closeButton = document.querySelector(".close-modal-btn");
  const closeEditButton = document.querySelector(".close-edit-btn");

  // Project Creation DOM Elements
  const getProjectForm = document.getElementById("addProject");
  const getProjectInput = document.getElementById("proName");
  const cancelProject = document.getElementById("cancelNewProject");
  const errorMessage = document.getElementById("err-msg");

  // Project Edit DOM Elements
  const cancelEditFormBtn = document.getElementById("cancelEditProject");

  // Task Forms Modal Elements
  const taskTrigger = document.querySelector("#task-modal-trigger");
  const taskModal = document.querySelector(".task-modal");
  const editTaskModal = document.querySelector(".edit-task-modal");
  const closeTaskButton = document.querySelector(".close-btn");
  const closeEdit = document.querySelector(".close-edit");

  // Task Creation DOM Elements
  const getTaskForm = document.getElementById("addTask");
  const titleTask = document.getElementById("taskTitle");
  const dueTask = document.getElementById("taskDue");
  const prioTask = document.getElementById("taskPrio");
  const notesTask = document.getElementById("taskNotes");
  const projTask = document.getElementById("taskProject");
  const cancelNewTask = document.getElementById("cancelNewTask");

  // Task Edit DOM Elements
  const editDueDate = document.getElementById("editTaskDue");
  const cancelEditTask = document.getElementById("cancelEditTaskBtn");

  // Limit selected date to today as a minimum
  const todayDate = Date.now();
  const limitToday = format(todayDate, "YYY-MM-dd");

  dueTask.setAttribute("min", limitToday);
  editDueDate.setAttribute("min", limitToday);

  // toggle create project form
  function toggleCreateProjectModal() {
    modal.classList.toggle("show-modal");
  }

  // toggle edit project form
  function toggleEditProjectModal() {
    editModal.classList.toggle("show-modal");
  }

  // toggle create task form
  function toggleCreateTaskModal() {
    taskModal.classList.toggle("show-modal");
  }

  // toggle edit task form
  function toggleEditTaskModal() {
    editTaskModal.classList.toggle("show-modal");
  }

  // function to close the modal when a user clicks anywhere on the window
  function windowOnClick(e) {
    if (e.target === modal) {
      toggleCreateProjectModal();
    } else if (e.target === editModal) {
      toggleEditProjectModal();
      displayProject.listTasks();
    } else if (e.target === taskModal) {
      toggleCreateTaskModal();
    } else if (e.target === editTaskModal) {
      toggleEditTaskModal();
    }
  }

  /** function to check the projectName a user inputs;
   * if the projectName exists already, a msg is displayed so that user can enter a different name;
   * if the name does not exist, call the project creation function;
   * call the project and list display functions for the frontend
   */
  function validateProjectEntry(pName) {
    if (createProject.todoFull.some((todo) => todo.projectName === pName)) {
      errorMessage.innerHTML = "This project name already exists.";
    } else {
      errorMessage.innerHTML = "";

      createProject.addProject(pName);

      toggleCreateProjectModal();

      displayProject.listProject();

      displayProject.listTasks();
    }
  }

  /** given that projectNames need to be prefilled, add the names as option tags under the select
   * for the forms, that way user can select a project from the list provided.
   */
  function prefillProjectNames(sTag) {
    sTag.innerHTML = "";

    createProject.todoFull.forEach((project) => {
      const projectOptions = document.createElement("option");

      projectOptions.innerHTML = project.projectName;
      projectOptions.value = project.projectName;

      sTag.appendChild(projectOptions);
    });
  }

  /** when user submits the project form, get projectName from input value;
   * validate the input;
   * reset the form to clear the previous input.
   */
  getProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userProject = getProjectInput.value;

    validateProjectEntry(userProject);

    getProjectForm.reset();
  });

  /** when user submits the task form, gather the input values;
   * call the add task function;
   * reset the form;
   * call the toggle modal function to close the modal after submit
   */
  getTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userTitle = titleTask.value;
    const userDue = dueTask.value;
    const userPrio = prioTask.value;
    const userNotes = notesTask.value;
    const userProject = projTask.value;

    createTask.addTask(userTitle, userDue, userProject, userPrio, userNotes);

    getTaskForm.reset();

    toggleCreateTaskModal();

    displayProject.listTasks();
  });

  // Create Project Modal
  trigger.addEventListener("click", toggleCreateProjectModal);
  closeButton.addEventListener("click", toggleCreateProjectModal);
  cancelProject.addEventListener("click", toggleCreateProjectModal);

  // Edit project modal
  closeEditButton.addEventListener("click", toggleEditProjectModal);
  cancelEditFormBtn.addEventListener("click", toggleEditProjectModal);

  // Create Task  modal
  // when the task modal trigger is called, call the function to prefill the projectNames then show the modal.
  taskTrigger.addEventListener("click", (e) => {
    prefillProjectNames(projTask);

    toggleCreateTaskModal();
  });
  closeTaskButton.addEventListener("click", toggleCreateTaskModal);
  cancelNewTask.addEventListener("click", toggleCreateTaskModal);

  // Edit task modal
  closeEdit.addEventListener("click", toggleEditTaskModal);
  cancelEditTask.addEventListener("click", toggleEditTaskModal);

  window.addEventListener("click", windowOnClick);

  return {
    toggleEditProjectModal,
    toggleEditTaskModal,
    prefillProjectNames,
  };
})();

export { formsDisplay };
