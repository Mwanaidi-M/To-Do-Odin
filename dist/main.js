/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectNew": () => (/* binding */ projectNew)
/* harmony export */ });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoTasks": () => (/* binding */ todoTasks)
/* harmony export */ });

class todoTasks
{
    constructor(title, description, dueDate, priority = ['Low', 'Medium', 'High'], notes, project)
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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");


const getProjectInput = document.getElementById('proName');
const getProjectForm = document.getElementById('addProject'); 
const cancelProject = document.getElementById('cancelNewProject'); 
const projectParent = document.getElementById('projects');
const projectContainer = document.getElementById('projectList');


const todoFull = [];
const defaultProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew('Inbox');

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

    userProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew(nameProject);
    todoFull.push(userProject);

    displayProject();
}

displayProject();


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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createTask */ "./src/modules/createTask.js");
// require('./modules/todo');



__webpack_require__(/*! ./modules/newProject */ "./src/modules/newProject.js");

// const todoFull = [];
// const defaultProject = new projectNew('Inbox');

// todoFull.push(defaultProject);

// console.log(todoFull);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMkJBQTJCLHNEQUFVOztBQUVyQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQVU7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FEO0FBQ0g7O0FBRWxELG1CQUFPLENBQUMseURBQXNCOztBQUU5QjtBQUNBOztBQUVBOztBQUVBLHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi8uL3NyYy9tb2R1bGVzL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1vZGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1vZGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLW9kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgcHJvamVjdE5ld1xue1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBwcm9qZWN0VGFza3MgPSBbXSlcbiAgICB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFza3MgPSBwcm9qZWN0VGFza3M7XG4gICAgfVxufVxuXG4vLyBsZXQgcHJvamVjdEZhY3RvcnkgPSAocHJvamVjdE5hbWUsIHByb2plY3RUYXNrcyA9IFtdKSA9PiB7XG4gICAgXG4vLyAgICAgcmV0dXJuIHtwcm9qZWN0TmFtZSwgcHJvamVjdFRhc2tzfTtcbi8vIH1cblxuZXhwb3J0IHsgcHJvamVjdE5ldyB9OyIsIlxuY2xhc3MgdG9kb1Rhc2tzXG57XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ10sIG5vdGVzLCBwcm9qZWN0KVxuICAgIHtcbiAgICAgICAgdGhpcy50YXNrVGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrRHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMudGFza1ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMudGFza05vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMudGFza1Byb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxufVxuXG5cbi8vIGxldCB0YXNrVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCkgPT5cbi8vIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgIHRhc2tUaXRsZTogdGl0bGUsIFxuLy8gICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4vLyAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGU6IGR1ZURhdGUsXG4vLyAgICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5OiBwcmlvcml0eSxcbi8vICAgICAgICAgICAgICAgICB0YXNrTm90ZXM6IG5vdGVzLFxuLy8gICAgICAgICAgICAgICAgIHRhc2tQcm9qZWN0OiBwcm9qZWN0XG4vLyAgICAgICAgICAgICB9O1xuLy8gfVxuXG5leHBvcnQgeyB0b2RvVGFza3MgfTsiLCJpbXBvcnQgeyBwcm9qZWN0TmV3IH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0JztcblxuY29uc3QgZ2V0UHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb05hbWUnKTtcbmNvbnN0IGdldFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTsgXG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbE5ld1Byb2plY3QnKTsgXG5jb25zdCBwcm9qZWN0UGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0Jyk7XG5cblxuY29uc3QgdG9kb0Z1bGwgPSBbXTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IHByb2plY3ROZXcoJ0luYm94Jyk7XG5cbnRvZG9GdWxsLnB1c2goZGVmYXVsdFByb2plY3QpO1xuXG5sZXQgdXNlclByb2plY3Q7XG5cbmdldFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYWRkUHJvamVjdCgpO1xuXG4gICAgZ2V0UHJvamVjdEZvcm0ucmVzZXQoKTtcbn0pXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KClcbntcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgdG9kb0Z1bGwuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBcbiAgICAgICAgbGlzdEVsZW1lbnQuaWQgPSBpbmRleDtcbiAgICAgICAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gaXRlbS5wcm9qZWN0TmFtZTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgICB9KVxuICAgIHByb2plY3RQYXJlbnQuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuXG4gICAgY29uc29sZS50YWJsZSh0b2RvRnVsbCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKVxue1xuICAgIGxldCBuYW1lUHJvamVjdCA9IGdldFByb2plY3RJbnB1dC52YWx1ZTtcblxuICAgIHVzZXJQcm9qZWN0ID0gbmV3IHByb2plY3ROZXcobmFtZVByb2plY3QpO1xuICAgIHRvZG9GdWxsLnB1c2godXNlclByb2plY3QpO1xuXG4gICAgZGlzcGxheVByb2plY3QoKTtcbn1cblxuZGlzcGxheVByb2plY3QoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gcmVxdWlyZSgnLi9tb2R1bGVzL3RvZG8nKTtcbmltcG9ydCB7IHByb2plY3ROZXcgfSBmcm9tICcuL21vZHVsZXMvY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgIHsgdG9kb1Rhc2tzIH0gZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZVRhc2snO1xuXG5yZXF1aXJlKCcuL21vZHVsZXMvbmV3UHJvamVjdCcpO1xuXG4vLyBjb25zdCB0b2RvRnVsbCA9IFtdO1xuLy8gY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgcHJvamVjdE5ldygnSW5ib3gnKTtcblxuLy8gdG9kb0Z1bGwucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbi8vIGNvbnNvbGUubG9nKHRvZG9GdWxsKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=