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
const todoFull = [];

class projectNew
{
    constructor(projectName, projectTasks = [])
    {
        this.projectName = projectName;
        this.projectTasks = projectTasks;
    }

}

// let projectFactory = (projectName, projectTasks = []) => {
    
//     return {projectName, projectTasks};
// }



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


const defaultProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew('Inbox');
const defaultProject2 = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew('Home');

_createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull.push(defaultProject);
_createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull.push(defaultProject2);

let userProject;

getProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addProject();

    getProjectForm.reset();
})

function displayProject()
{
    projectContainer.innerHTML = '';

    _createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull.forEach((item, index) => {
        const listElement = document.createElement('li');
        
        listElement.id = index;
        listElement.innerHTML = item.projectName;

        projectContainer.appendChild(listElement);
    })
    projectParent.append(projectContainer);

    console.table(_createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull);
}

function addProject()
{
    let nameProject = getProjectInput.value;

    userProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew(nameProject);
    _createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull.push(userProject);

    displayProject();

}

displayProject();


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




const getTaskForm = document.getElementById('addTask');
const titleTask = document.getElementById('taskTitle');
const descTask = document.getElementById('taskDesc');
const dueTask = document.getElementById('taskDue');
const prioTask = document.getElementById('taskPrio');
const notesTask = document.getElementById('taskNotes');
const projTask = document.getElementById('taskProject');
const taskContainer = document.getElementById('showTasks');

let userTask;
let priorityOptions = ['Low', 'Medium', 'High'];

getTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addTask();

    getTaskForm.reset();
})

function prefilledValues()
{
    
    prioTask.innerHTML = '';
    projTask.innerHTML = '';

    _createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull.forEach((project, index) => {
        const projOptions = document.createElement('option');
        projOptions.innerHTML = project['projectName'];
        projOptions.value = project['projectName'];

        projTask.appendChild(projOptions);
    });

    priorityOptions.forEach((priorityLevel) => {
    
        const priOptions = document.createElement('option');

        priOptions.innerHTML = priorityLevel;
        priOptions.value = priorityLevel;

        prioTask.appendChild(priOptions);
            
    })
}
function displayTask()
{
    taskContainer.innerHTML = '';

    _createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull.forEach((project, index) => {
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
            // readButton.classList.add('readBtn');
            // readButton.addEventListener('click', changeRead);
            updateTask.appendChild(editButton);
            taskRow.appendChild(updateTask);

            let removeTask = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'delete';
            // deleteButton.classList.add('deleteBtn');
            // deleteButton.addEventListener('click', removeBook);
            removeTask.appendChild(deleteButton);
            taskRow.appendChild(removeTask);

            taskContainer.appendChild(taskRow);
        })
    })
}
function addTask()
{
    const title = titleTask.value;
    const desc = descTask.value;
    const tDate = dueTask.value;
    const prio = prioTask.value;
    const tNotes = notesTask.value;
    const tProj = projTask.value;

    userTask = new _createTask__WEBPACK_IMPORTED_MODULE_1__.todoTasks(title, desc, tDate, prio, tNotes, tProj);

    let projectIndex = _createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull.findIndex(pInd => pInd.projectName === tProj);
    _createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull[projectIndex].projectTasks.push(userTask);

    console.table(_createProject__WEBPACK_IMPORTED_MODULE_0__.todoFull);
    console.table(userTask);

    displayTask();
}
prefilledValues();
displayTask();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQnVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwyQkFBMkIsc0RBQVU7QUFDckMsNEJBQTRCLHNEQUFVOztBQUV0Qyx5REFBYTtBQUNiLHlEQUFhOztBQUViOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQkFBa0Isb0RBQVE7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixzREFBVTtBQUNoQyxJQUFJLHlEQUFhOztBQUVqQjs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEdUQ7QUFDZDs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtEQUFTOztBQUU1Qix1QkFBdUIsOERBQWtCO0FBQ3pDLElBQUksb0RBQVE7O0FBRVosa0JBQWtCLG9EQUFRO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUMzR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTEEsbUJBQU8sQ0FBQyx5REFBc0I7QUFDOUIsbUJBQU8sQ0FBQyxtREFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL21vZHVsZXMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLW9kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLW9kaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2RvRnVsbCA9IFtdO1xuXG5jbGFzcyBwcm9qZWN0TmV3XG57XG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3RUYXNrcyA9IFtdKVxuICAgIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RUYXNrcyA9IHByb2plY3RUYXNrcztcbiAgICB9XG5cbn1cblxuLy8gbGV0IHByb2plY3RGYWN0b3J5ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0VGFza3MgPSBbXSkgPT4ge1xuICAgIFxuLy8gICAgIHJldHVybiB7cHJvamVjdE5hbWUsIHByb2plY3RUYXNrc307XG4vLyB9XG5cbmV4cG9ydCB7IHRvZG9GdWxsLCBwcm9qZWN0TmV3IH07IiwiXG5jbGFzcyB0b2RvVGFza3NcbntcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdClcbiAgICB7XG4gICAgICAgIHRoaXMudGFza1RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudGFza0R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tOb3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLnRhc2tQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbn1cblxuXG4vLyBsZXQgdGFza1RvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2plY3QpID0+XG4vLyB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgICB0YXNrVGl0bGU6IHRpdGxlLCBcbi8vICAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuLy8gICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlOiBkdWVEYXRlLFxuLy8gICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eTogcHJpb3JpdHksXG4vLyAgICAgICAgICAgICAgICAgdGFza05vdGVzOiBub3Rlcyxcbi8vICAgICAgICAgICAgICAgICB0YXNrUHJvamVjdDogcHJvamVjdFxuLy8gICAgICAgICAgICAgfTtcbi8vIH1cblxuZXhwb3J0IHsgdG9kb1Rhc2tzIH07IiwiaW1wb3J0IHsgdG9kb0Z1bGwsIHByb2plY3ROZXcgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuXG5jb25zdCBnZXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7IFxuY29uc3QgZ2V0UHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb05hbWUnKTtcbmNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsTmV3UHJvamVjdCcpOyBcbmNvbnN0IHByb2plY3RQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcblxuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBwcm9qZWN0TmV3KCdJbmJveCcpO1xuY29uc3QgZGVmYXVsdFByb2plY3QyID0gbmV3IHByb2plY3ROZXcoJ0hvbWUnKTtcblxudG9kb0Z1bGwucHVzaChkZWZhdWx0UHJvamVjdCk7XG50b2RvRnVsbC5wdXNoKGRlZmF1bHRQcm9qZWN0Mik7XG5cbmxldCB1c2VyUHJvamVjdDtcblxuZ2V0UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhZGRQcm9qZWN0KCk7XG5cbiAgICBnZXRQcm9qZWN0Rm9ybS5yZXNldCgpO1xufSlcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKVxue1xuICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0b2RvRnVsbC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuICAgICAgICBsaXN0RWxlbWVudC5pZCA9IGluZGV4O1xuICAgICAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSBpdGVtLnByb2plY3ROYW1lO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuICAgIH0pXG4gICAgcHJvamVjdFBhcmVudC5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBjb25zb2xlLnRhYmxlKHRvZG9GdWxsKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpXG57XG4gICAgbGV0IG5hbWVQcm9qZWN0ID0gZ2V0UHJvamVjdElucHV0LnZhbHVlO1xuXG4gICAgdXNlclByb2plY3QgPSBuZXcgcHJvamVjdE5ldyhuYW1lUHJvamVjdCk7XG4gICAgdG9kb0Z1bGwucHVzaCh1c2VyUHJvamVjdCk7XG5cbiAgICBkaXNwbGF5UHJvamVjdCgpO1xuXG59XG5cbmRpc3BsYXlQcm9qZWN0KCk7XG4iLCJcbmltcG9ydCB7IHRvZG9GdWxsLCBwcm9qZWN0TmV3IH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcbmltcG9ydCB7IHRvZG9UYXNrcyB9IGZyb20gJy4vY3JlYXRlVGFzayc7XG5cbmNvbnN0IGdldFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2snKTtcbmNvbnN0IHRpdGxlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcbmNvbnN0IGRlc2NUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJyk7XG5jb25zdCBkdWVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEdWUnKTtcbmNvbnN0IHByaW9UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvJyk7XG5jb25zdCBub3Rlc1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05vdGVzJyk7XG5jb25zdCBwcm9qVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJvamVjdCcpO1xuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93VGFza3MnKTtcblxubGV0IHVzZXJUYXNrO1xubGV0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbmdldFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYWRkVGFzaygpO1xuXG4gICAgZ2V0VGFza0Zvcm0ucmVzZXQoKTtcbn0pXG5cbmZ1bmN0aW9uIHByZWZpbGxlZFZhbHVlcygpXG57XG4gICAgXG4gICAgcHJpb1Rhc2suaW5uZXJIVE1MID0gJyc7XG4gICAgcHJvalRhc2suaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0b2RvRnVsbC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qT3B0aW9ucy5pbm5lckhUTUwgPSBwcm9qZWN0Wydwcm9qZWN0TmFtZSddO1xuICAgICAgICBwcm9qT3B0aW9ucy52YWx1ZSA9IHByb2plY3RbJ3Byb2plY3ROYW1lJ107XG5cbiAgICAgICAgcHJvalRhc2suYXBwZW5kQ2hpbGQocHJvak9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2goKHByaW9yaXR5TGV2ZWwpID0+IHtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgIHByaU9wdGlvbnMuaW5uZXJIVE1MID0gcHJpb3JpdHlMZXZlbDtcbiAgICAgICAgcHJpT3B0aW9ucy52YWx1ZSA9IHByaW9yaXR5TGV2ZWw7XG5cbiAgICAgICAgcHJpb1Rhc2suYXBwZW5kQ2hpbGQocHJpT3B0aW9ucyk7XG4gICAgICAgICAgICBcbiAgICB9KVxufVxuZnVuY3Rpb24gZGlzcGxheVRhc2soKVxue1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0b2RvRnVsbC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBjb25zdCB0YXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgLy8gdGFza1Jvdy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgICAgICBmb3IoY29uc3Qga2V5IGluIHRhc2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgIHRhc2tEYXRhLmlubmVySFRNTCA9IHRhc2tba2V5XTtcbiAgICAgICAgICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tEYXRhKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdXBkYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmlubmVyVGV4dCA9ICd1cGRhdGUnO1xuICAgICAgICAgICAgLy8gcmVhZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWFkQnRuJyk7XG4gICAgICAgICAgICAvLyByZWFkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlUmVhZCk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh1cGRhdGVUYXNrKTtcblxuICAgICAgICAgICAgbGV0IHJlbW92ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICAvLyBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRuJyk7XG4gICAgICAgICAgICAvLyBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVCb29rKTtcbiAgICAgICAgICAgIHJlbW92ZVRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQocmVtb3ZlVGFzayk7XG5cbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1Jvdyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cbmZ1bmN0aW9uIGFkZFRhc2soKVxue1xuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVUYXNrLnZhbHVlO1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjVGFzay52YWx1ZTtcbiAgICBjb25zdCB0RGF0ZSA9IGR1ZVRhc2sudmFsdWU7XG4gICAgY29uc3QgcHJpbyA9IHByaW9UYXNrLnZhbHVlO1xuICAgIGNvbnN0IHROb3RlcyA9IG5vdGVzVGFzay52YWx1ZTtcbiAgICBjb25zdCB0UHJvaiA9IHByb2pUYXNrLnZhbHVlO1xuXG4gICAgdXNlclRhc2sgPSBuZXcgdG9kb1Rhc2tzKHRpdGxlLCBkZXNjLCB0RGF0ZSwgcHJpbywgdE5vdGVzLCB0UHJvaik7XG5cbiAgICBsZXQgcHJvamVjdEluZGV4ID0gdG9kb0Z1bGwuZmluZEluZGV4KHBJbmQgPT4gcEluZC5wcm9qZWN0TmFtZSA9PT0gdFByb2opO1xuICAgIHRvZG9GdWxsW3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzLnB1c2godXNlclRhc2spO1xuXG4gICAgY29uc29sZS50YWJsZSh0b2RvRnVsbCk7XG4gICAgY29uc29sZS50YWJsZSh1c2VyVGFzayk7XG5cbiAgICBkaXNwbGF5VGFzaygpO1xufVxucHJlZmlsbGVkVmFsdWVzKCk7XG5kaXNwbGF5VGFzaygpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5yZXF1aXJlKCcuL21vZHVsZXMvbmV3UHJvamVjdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL25ld1Rhc2snKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9