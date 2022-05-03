/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectNew": () => (/* binding */ projectNew),
/* harmony export */   "todoFull": () => (/* binding */ todoFull)
/* harmony export */ });
let todoFull = [];


class projectNew
{
    constructor(projectName, projectTasks = [])
    {
        this.projectName = projectName;
        this.projectTasks = projectTasks;
    }

    capProjectName()
    {
        let nameP = this.projectName;
        nameP = nameP.split('').map((lett, index)=>{
            return index === 0 ? lett.toUpperCase(): lett;
        }).join('');

        this.projectName = nameP; 
        
        return this.projectName  ;
    }
}


// let projectFactory = (projectName, projectTasks = []) => {
    
//     return {projectName, projectTasks};
// }
// const defaultProject = new projectNew('Inbox');
// const defaultProject2 = new projectNew('Home');

// todoFull.push(defaultProject);
// todoFull.push(defaultProject2);

// localStorage.setItem('todos', JSON.stringify(todoFull));
// localStorage.clear();



/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoTasks": () => (/* binding */ todoTasks)
/* harmony export */ });

class todoTasks
{
    constructor(title, description, dueDate, priority, notes, project)
    {
        this.taskTitle = title;
        this.taskDescription = description;
        this.taskDueDate = dueDate;
        this.taskPriority = priority;
        this.taskNotes = notes;
        this.taskProject = project;
    }

}

// let taskTodo = (title, description, dueDate, priority, notes, project) =>
// {
//     return {
//                 taskTitle: title, 
//                 taskDescription: description,
//                 taskDueDate: dueDate,
//                 taskPriority: priority,
//                 taskNotes: notes,
//                 taskProject: project
//             };
// }



/***/ }),

/***/ "./src/modules/newProject.js":
/*!***********************************!*\
  !*** ./src/modules/newProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");


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

const defaultProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew('Inbox');
const defaultProject2 = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew('Home');

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

    userProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew(nameProject);

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

/***/ }),

/***/ "./src/modules/newTask.js":
/*!********************************!*\
  !*** ./src/modules/newTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/modules/createTask.js");




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

    userTask = new _createTask__WEBPACK_IMPORTED_MODULE_1__.todoTasks(title, desc, tDate, prio, tNotes, tProj);

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

__webpack_require__(/*! ./modules/newProject */ "./src/modules/newProject.js");
__webpack_require__(/*! ./modules/newTask */ "./src/modules/newTask.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDJCQUEyQixzREFBVTtBQUNyQyw0QkFBNEIsc0RBQVU7O0FBRXRDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLHNEQUFVOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzSHVEO0FBQ2Q7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrREFBUzs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7VUMzS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTEEsbUJBQU8sQ0FBQyx5REFBc0I7QUFDOUIsbUJBQU8sQ0FBQyxtREFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLW9kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLW9kaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdG9kb0Z1bGwgPSBbXTtcblxuXG5jbGFzcyBwcm9qZWN0TmV3XG57XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3RUYXNrcyA9IFtdKVxuICAgIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RUYXNrcyA9IHByb2plY3RUYXNrcztcbiAgICB9XG5cbiAgICBjYXBQcm9qZWN0TmFtZSgpXG4gICAge1xuICAgICAgICBsZXQgbmFtZVAgPSB0aGlzLnByb2plY3ROYW1lO1xuICAgICAgICBuYW1lUCA9IG5hbWVQLnNwbGl0KCcnKS5tYXAoKGxldHQsIGluZGV4KT0+e1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSAwID8gbGV0dC50b1VwcGVyQ2FzZSgpOiBsZXR0O1xuICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gbmFtZVA7IFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWUgIDtcbiAgICB9XG59XG5cblxuLy8gbGV0IHByb2plY3RGYWN0b3J5ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0VGFza3MgPSBbXSkgPT4ge1xuICAgIFxuLy8gICAgIHJldHVybiB7cHJvamVjdE5hbWUsIHByb2plY3RUYXNrc307XG4vLyB9XG4vLyBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBwcm9qZWN0TmV3KCdJbmJveCcpO1xuLy8gY29uc3QgZGVmYXVsdFByb2plY3QyID0gbmV3IHByb2plY3ROZXcoJ0hvbWUnKTtcblxuLy8gdG9kb0Z1bGwucHVzaChkZWZhdWx0UHJvamVjdCk7XG4vLyB0b2RvRnVsbC5wdXNoKGRlZmF1bHRQcm9qZWN0Mik7XG5cbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9GdWxsKSk7XG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuZXhwb3J0IHsgdG9kb0Z1bGwsIHByb2plY3ROZXcgfTsiLCJcbmNsYXNzIHRvZG9UYXNrc1xue1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0KVxuICAgIHtcbiAgICAgICAgdGhpcy50YXNrVGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrRHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMudGFza1ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMudGFza05vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMudGFza1Byb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxufVxuXG4vLyBsZXQgdGFza1RvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2plY3QpID0+XG4vLyB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgICB0YXNrVGl0bGU6IHRpdGxlLCBcbi8vICAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuLy8gICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlOiBkdWVEYXRlLFxuLy8gICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eTogcHJpb3JpdHksXG4vLyAgICAgICAgICAgICAgICAgdGFza05vdGVzOiBub3Rlcyxcbi8vICAgICAgICAgICAgICAgICB0YXNrUHJvamVjdDogcHJvamVjdFxuLy8gICAgICAgICAgICAgfTtcbi8vIH1cblxuZXhwb3J0IHsgdG9kb1Rhc2tzIH07IiwiaW1wb3J0IHsgdG9kb0Z1bGwsIHByb2plY3ROZXcgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuXG5jb25zdCBnZXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG5jb25zdCBnZXRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvTmFtZScpO1xuY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxOZXdQcm9qZWN0Jyk7IFxuY29uc3QgcHJvamVjdFBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpO1xuXG5jb25zdCBlZGl0Rm9ybUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RDb250YWluZXInKTtcbmNvbnN0IGVkaXRGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQcm9qZWN0QnRuJyk7XG5jb25zdCBjYW5jZWxFZGl0Rm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxFZGl0UHJvamVjdCcpO1xuY29uc3QgZWRpdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHJvTmFtZScpOyBcblxuLy8gZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbmxldCB1c2VyUHJvamVjdDtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgcHJvamVjdE5ldygnSW5ib3gnKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0MiA9IG5ldyBwcm9qZWN0TmV3KCdIb21lJyk7XG5cbmdldFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYWRkUHJvamVjdCgpO1xuXG4gICAgZ2V0UHJvamVjdEZvcm0ucmVzZXQoKTtcbn0pXG5cbi8vIFtkZWZhdWx0UHJvamVjdCwgZGVmYXVsdFByb2plY3QyXVxuXG5cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKVxue1xuICAgIGxldCB0b2RvRnVsbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtkZWZhdWx0UHJvamVjdF07XG4gICAgXG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHRvZG9GdWxsLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgXG4gICAgICAgIGxpc3RFbGVtZW50LmlkID0gaW5kZXg7XG4gICAgICAgIGxpc3RFbGVtZW50LmlubmVySFRNTCA9IGl0ZW0ucHJvamVjdE5hbWU7XG5cbiAgICAgICAgaWYoaW5kZXggIT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbmFtZUJ1dHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHJlbmFtZUJ1dHQuaW5uZXJIVE1MID0gJ1JlbmFtZSc7XG4gICAgICAgICAgICByZW5hbWVCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybUNvbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgICAgICBlZGl0UHJvamVjdElucHV0LnZhbHVlID0gaXRlbS5wcm9qZWN0TmFtZTtcblxuICAgICAgICAgICAgICAgIGVkaXRGb3JtQnRuLnNldEF0dHJpYnV0ZSgndG9VcGRhdGUnLCBpbmRleCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChyZW5hbWVCdXR0KTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dC5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRvZG9GdWxsLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0Z1bGwpKTtcblxuICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dCk7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgICB9KVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0Z1bGwpKTtcblxuICAgIGNvbnNvbGUudGFibGUodG9kb0Z1bGwpO1xufVxuXG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpXG57XG4gICAgbGV0IG5hbWVQcm9qZWN0ID0gZ2V0UHJvamVjdElucHV0LnZhbHVlO1xuXG4gICAgbGV0IHRvZG9GdWxsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cbiAgICB1c2VyUHJvamVjdCA9IG5ldyBwcm9qZWN0TmV3KG5hbWVQcm9qZWN0KTtcblxuICAgIHVzZXJQcm9qZWN0LmNhcFByb2plY3ROYW1lKCk7XG5cbiAgICB0b2RvRnVsbC5wdXNoKHVzZXJQcm9qZWN0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9GdWxsKSk7XG4gICAgLy8gcmVuZGVyIHRoZW0gdG8gc2NyZWVuXG4gICAgZGlzcGxheVByb2plY3QoKTtcblxufVxuXG5cbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QoZSlcbntcbiAgICBsZXQgdG9kb0Z1bGwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICBsZXQgcEluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0b1VwZGF0ZScpO1xuICAgIGxldCBuZXdOYW1lID0gZWRpdFByb2plY3RJbnB1dC52YWx1ZTtcblxuICAgIHRvZG9GdWxsW3BJbmRleF1bJ3Byb2plY3ROYW1lJ10gPSBuZXdOYW1lO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0Z1bGwpKTtcblxuICAgIGRpc3BsYXlQcm9qZWN0KCk7XG5cbiAgICBlZGl0Rm9ybUNvbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2FuY2VsRWRpdFByb2plY3QoKVxue1xuICAgIGVkaXRGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5kaXNwbGF5UHJvamVjdCgpO1xuXG5lZGl0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmFtZVByb2plY3QpO1xuY2FuY2VsRWRpdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxFZGl0UHJvamVjdCk7IiwiXG5pbXBvcnQgeyB0b2RvRnVsbCwgcHJvamVjdE5ldyB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgeyB0b2RvVGFza3MgfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuXG5jb25zdCBnZXRUYXNrRm9ybUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0NvbnRhaW5lcicpO1xuY29uc3QgZ2V0VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpO1xuY29uc3QgdGl0bGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpO1xuY29uc3QgZGVzY1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2MnKTtcbmNvbnN0IGR1ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0R1ZScpO1xuY29uc3QgcHJpb1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW8nKTtcbmNvbnN0IG5vdGVzVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTm90ZXMnKTtcbmNvbnN0IHByb2pUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcm9qZWN0Jyk7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dUYXNrcycpO1xuXG5cbmNvbnN0IGVkaXRUYXNrRm9ybUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tDb250YWluZXInKTtcbmNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrQnRuJyk7XG5jb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tUaXRsZScpO1xuY29uc3QgZWRpdERlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tEZXNjJyk7XG5jb25zdCBlZGl0RHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0R1ZScpO1xuY29uc3QgZWRpdFByaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tQcmlvJyk7XG5jb25zdCBlZGl0Tm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tOb3RlcycpO1xuY29uc3QgZ2V0VGFza1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRhc2tQcm9qZWN0Jyk7XG5cbmxldCB1c2VyVGFzaztcbmxldCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG5nZXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFkZFRhc2soKTtcblxuICAgIGdldFRhc2tGb3JtLnJlc2V0KCk7XG59KVxuXG5mdW5jdGlvbiBwcmVmaWxsZWRWYWx1ZXMoKVxue1xuICAgIGxldCB0b2RvRnVsbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuXG4gICAgcHJvalRhc2suaW5uZXJIVE1MID0gJyc7XG5cblxuICAgIHRvZG9GdWxsLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2pPcHRpb25zLmlubmVySFRNTCA9IHByb2plY3RbJ3Byb2plY3ROYW1lJ107XG4gICAgICAgIHByb2pPcHRpb25zLnZhbHVlID0gcHJvamVjdFsncHJvamVjdE5hbWUnXTtcblxuICAgICAgICBwcm9qVGFzay5hcHBlbmRDaGlsZChwcm9qT3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvRnVsbCkpO1xufVxuZnVuY3Rpb24gZGlzcGxheVRhc2soKVxue1xuICAgIGxldCB0b2RvRnVsbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0b2RvRnVsbC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBjb25zdCB0YXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgLy8gdGFza1Jvdy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICBmb3IoY29uc3Qga2V5IGluIHRhc2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tEYXRhLmlubmVySFRNTCA9IHRhc2tba2V5XTtcbiAgICAgICAgICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tEYXRhKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXBkYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9ICd1cGRhdGUnO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2V0VGFza0Zvcm1Db250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZWRpdFRhc2tGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAgICAgICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRhc2sudGFza1RpdGxlO1xuICAgICAgICAgICAgICAgIGVkaXREZXNjLnZhbHVlID0gdGFzay50YXNrRGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgZWRpdER1ZURhdGUudmFsdWUgPSB0YXNrLnRhc2tEdWVEYXRlO1xuICAgICAgICAgICAgICAgIGVkaXRQcmlvLnZhbHVlID0gdGFzay50YXNrUHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgZWRpdE5vdGVzLnZhbHVlID0gdGFzay50YXNrTm90ZXM7XG4gICAgICAgICAgICAgICAgZ2V0VGFza1Byb2plY3QudmFsdWUgPSB0YXNrLnRhc2tQcm9qZWN0O1xuXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tCdG4uc2V0QXR0cmlidXRlKCd0b1VwZGF0ZScsIGluZGV4KTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHJlYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVhZEJ0bicpO1xuICAgICAgICAgICAgdXBkYXRlVGFzay5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodXBkYXRlVGFzayk7XG5cbiAgICAgICAgICAgIGxldCByZW1vdmVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdkZWxldGUnO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnByb2plY3RUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0Z1bGwpKTtcblxuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKHByb2plY3QucHJvamVjdFRhc2tzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRuJyk7XG4gICAgICAgICAgICByZW1vdmVUYXNrLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHJlbW92ZVRhc2spO1xuXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9GdWxsKSk7XG59XG5mdW5jdGlvbiBhZGRUYXNrKClcbntcbiAgICBsZXQgdG9kb0Z1bGwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVUYXNrLnZhbHVlO1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjVGFzay52YWx1ZTtcbiAgICBjb25zdCB0RGF0ZSA9IGR1ZVRhc2sudmFsdWU7XG4gICAgY29uc3QgcHJpbyA9IHByaW9UYXNrLnZhbHVlO1xuICAgIGNvbnN0IHROb3RlcyA9IG5vdGVzVGFzay52YWx1ZTtcbiAgICBjb25zdCB0UHJvaiA9IHByb2pUYXNrLnZhbHVlO1xuXG4gICAgdXNlclRhc2sgPSBuZXcgdG9kb1Rhc2tzKHRpdGxlLCBkZXNjLCB0RGF0ZSwgcHJpbywgdE5vdGVzLCB0UHJvaik7XG5cbiAgICBsZXQgcHJvamVjdEluZGV4ID0gdG9kb0Z1bGwuZmluZEluZGV4KHBJbmQgPT4gcEluZC5wcm9qZWN0TmFtZSA9PT0gdFByb2opO1xuICAgIHRvZG9GdWxsW3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzLnB1c2godXNlclRhc2spO1xuXG4gICAgY29uc29sZS50YWJsZSh0b2RvRnVsbCk7XG4gICAgLy8gY29uc29sZS50YWJsZSh1c2VyVGFzayk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvRnVsbCkpO1xuXG4gICAgZGlzcGxheVRhc2soKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tUb2RvKGUpXG57XG4gICAgbGV0IHRvZG9GdWxsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgbGV0IHRhc2tJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndG9VcGRhdGUnKTtcbiAgICBsZXQgdFByb2ogPSBnZXRUYXNrUHJvamVjdC52YWx1ZTtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gdG9kb0Z1bGwuZmluZEluZGV4KChwcm8pID0+IHByby5wcm9qZWN0TmFtZSA9PT0gdFByb2opO1xuXG4gICAgY29uc3QgdGl0bGUgPSBlZGl0VGl0bGUudmFsdWU7XG4gICAgY29uc3QgZGVzYyA9IGVkaXREZXNjLnZhbHVlO1xuICAgIGNvbnN0IHREYXRlID0gZWRpdER1ZURhdGUudmFsdWU7XG4gICAgY29uc3QgcHJpbyA9IGVkaXRQcmlvLnZhbHVlO1xuICAgIGNvbnN0IHROb3RlcyA9IGVkaXROb3Rlcy52YWx1ZTtcblxuICAgIHRvZG9GdWxsW3Byb2plY3RJbmRleF1bJ3Byb2plY3RUYXNrcyddW3Rhc2tJbmRleF1bJ3Rhc2tUaXRsZSddID0gdGl0bGU7XG4gICAgdG9kb0Z1bGxbcHJvamVjdEluZGV4XVsncHJvamVjdFRhc2tzJ11bdGFza0luZGV4XVsndGFza0Rlc2NyaXB0aW9uJ10gPSBkZXNjO1xuICAgIHRvZG9GdWxsW3Byb2plY3RJbmRleF1bJ3Byb2plY3RUYXNrcyddW3Rhc2tJbmRleF1bJ3Rhc2tEdWVEYXRlJ10gPSB0RGF0ZTtcbiAgICB0b2RvRnVsbFtwcm9qZWN0SW5kZXhdWydwcm9qZWN0VGFza3MnXVt0YXNrSW5kZXhdWyd0YXNrUHJpb3JpdHknXSA9IHByaW87XG4gICAgdG9kb0Z1bGxbcHJvamVjdEluZGV4XVsncHJvamVjdFRhc2tzJ11bdGFza0luZGV4XVsndGFza05vdGVzJ10gPSB0Tm90ZXM7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvRnVsbCkpO1xuXG4gICAgZGlzcGxheVRhc2soKTtcblxuICAgIGdldFRhc2tGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBlZGl0VGFza0Zvcm1Db250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gY29uc29sZS5sb2codGFza0luZGV4KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRvZG9GdWxsW3Byb2plY3RJbmRleF1bJ3Byb2plY3RUYXNrcyddW3Rhc2tJbmRleF0pO1xufVxuXG5wcmVmaWxsZWRWYWx1ZXMoKTtcbmRpc3BsYXlUYXNrKCk7XG5cbmVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2tUb2RvKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxucmVxdWlyZSgnLi9tb2R1bGVzL25ld1Byb2plY3QnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9uZXdUYXNrJyk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==