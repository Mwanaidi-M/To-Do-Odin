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

}

// localStorage.setItem('AllTodo', JSON.stringify(todoFull));

// let projectFactory = (projectName, projectTasks = []) => {
    
//     return {projectName, projectTasks};
// }
const defaultProject = new projectNew('Inbox');
const defaultProject2 = new projectNew('Home');

todoFull.push(defaultProject);
todoFull.push(defaultProject2);

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

    userProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__.projectNew(nameProject);
    todoFull.push(userProject);

    localStorage.setItem('todos', JSON.stringify(todoFull));
    // render them to screen
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
    let todoFull = JSON.parse(localStorage.getItem('todos')) || [];

    prioTask.innerHTML = '';
    projTask.innerHTML = '';

    todoFull.forEach((project, index) => {
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
            
    });

    localStorage.setItem('todos', JSON.stringify(todoFull));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQVU7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcER1RDtBQUNkOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0RBQVM7O0FBRTVCLHVCQUF1Qiw4REFBa0I7QUFDekMsSUFBSSxvREFBUTs7QUFFWixrQkFBa0Isb0RBQVE7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzlHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNMQSxtQkFBTyxDQUFDLHlEQUFzQjtBQUM5QixtQkFBTyxDQUFDLG1EQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLW9kaW4vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLW9kaW4vLi9zcmMvbW9kdWxlcy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLW9kaW4vLi9zcmMvbW9kdWxlcy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLW9kaW4vLi9zcmMvbW9kdWxlcy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB0b2RvRnVsbCA9IFtdO1xuXG5cbmNsYXNzIHByb2plY3ROZXdcbntcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdFRhc2tzID0gW10pXG4gICAge1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdFRhc2tzID0gcHJvamVjdFRhc2tzO1xuICAgIH1cblxufVxuXG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsVG9kbycsIEpTT04uc3RyaW5naWZ5KHRvZG9GdWxsKSk7XG5cbi8vIGxldCBwcm9qZWN0RmFjdG9yeSA9IChwcm9qZWN0TmFtZSwgcHJvamVjdFRhc2tzID0gW10pID0+IHtcbiAgICBcbi8vICAgICByZXR1cm4ge3Byb2plY3ROYW1lLCBwcm9qZWN0VGFza3N9O1xuLy8gfVxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgcHJvamVjdE5ldygnSW5ib3gnKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0MiA9IG5ldyBwcm9qZWN0TmV3KCdIb21lJyk7XG5cbnRvZG9GdWxsLnB1c2goZGVmYXVsdFByb2plY3QpO1xudG9kb0Z1bGwucHVzaChkZWZhdWx0UHJvamVjdDIpO1xuXG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvRnVsbCkpO1xuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbmV4cG9ydCB7IHRvZG9GdWxsLCBwcm9qZWN0TmV3IH07IiwiXG5jbGFzcyB0b2RvVGFza3NcbntcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdClcbiAgICB7XG4gICAgICAgIHRoaXMudGFza1RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudGFza0R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tOb3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLnRhc2tQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbn1cblxuXG4vLyBsZXQgdGFza1RvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2plY3QpID0+XG4vLyB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgICB0YXNrVGl0bGU6IHRpdGxlLCBcbi8vICAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuLy8gICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlOiBkdWVEYXRlLFxuLy8gICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eTogcHJpb3JpdHksXG4vLyAgICAgICAgICAgICAgICAgdGFza05vdGVzOiBub3Rlcyxcbi8vICAgICAgICAgICAgICAgICB0YXNrUHJvamVjdDogcHJvamVjdFxuLy8gICAgICAgICAgICAgfTtcbi8vIH1cblxuZXhwb3J0IHsgdG9kb1Rhc2tzIH07IiwiaW1wb3J0IHsgdG9kb0Z1bGwsIHByb2plY3ROZXcgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuXG5jb25zdCBnZXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7IFxuY29uc3QgZ2V0UHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb05hbWUnKTtcbmNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsTmV3UHJvamVjdCcpOyBcbmNvbnN0IHByb2plY3RQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcblxubGV0IHVzZXJQcm9qZWN0O1xuXG5nZXRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFkZFByb2plY3QoKTtcblxuICAgIGdldFByb2plY3RGb3JtLnJlc2V0KCk7XG59KVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpXG57XG4gICAgbGV0IHRvZG9GdWxsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XG4gICAgXG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHRvZG9GdWxsLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgXG4gICAgICAgIGxpc3RFbGVtZW50LmlkID0gaW5kZXg7XG4gICAgICAgIGxpc3RFbGVtZW50LmlubmVySFRNTCA9IGl0ZW0ucHJvamVjdE5hbWU7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gICAgfSlcbiAgICBwcm9qZWN0UGFyZW50LmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9GdWxsKSk7XG5cbiAgICBjb25zb2xlLnRhYmxlKHRvZG9GdWxsKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpXG57XG4gICAgbGV0IG5hbWVQcm9qZWN0ID0gZ2V0UHJvamVjdElucHV0LnZhbHVlO1xuICAgIGNvbnN0IHRvZG9GdWxsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cbiAgICB1c2VyUHJvamVjdCA9IG5ldyBwcm9qZWN0TmV3KG5hbWVQcm9qZWN0KTtcbiAgICB0b2RvRnVsbC5wdXNoKHVzZXJQcm9qZWN0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9GdWxsKSk7XG4gICAgLy8gcmVuZGVyIHRoZW0gdG8gc2NyZWVuXG4gICAgZGlzcGxheVByb2plY3QoKTtcblxufVxuXG5kaXNwbGF5UHJvamVjdCgpO1xuIiwiXG5pbXBvcnQgeyB0b2RvRnVsbCwgcHJvamVjdE5ldyB9IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5pbXBvcnQgeyB0b2RvVGFza3MgfSBmcm9tICcuL2NyZWF0ZVRhc2snO1xuXG5jb25zdCBnZXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrJyk7XG5jb25zdCB0aXRsZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJyk7XG5jb25zdCBkZXNjVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzYycpO1xuY29uc3QgZHVlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRHVlJyk7XG5jb25zdCBwcmlvVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpbycpO1xuY29uc3Qgbm90ZXNUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOb3RlcycpO1xuY29uc3QgcHJvalRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1Byb2plY3QnKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd1Rhc2tzJyk7XG5cbmxldCB1c2VyVGFzaztcbmxldCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG5nZXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFkZFRhc2soKTtcblxuICAgIGdldFRhc2tGb3JtLnJlc2V0KCk7XG59KVxuXG5mdW5jdGlvbiBwcmVmaWxsZWRWYWx1ZXMoKVxue1xuICAgIGxldCB0b2RvRnVsbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuXG4gICAgcHJpb1Rhc2suaW5uZXJIVE1MID0gJyc7XG4gICAgcHJvalRhc2suaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0b2RvRnVsbC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qT3B0aW9ucy5pbm5lckhUTUwgPSBwcm9qZWN0Wydwcm9qZWN0TmFtZSddO1xuICAgICAgICBwcm9qT3B0aW9ucy52YWx1ZSA9IHByb2plY3RbJ3Byb2plY3ROYW1lJ107XG5cbiAgICAgICAgcHJvalRhc2suYXBwZW5kQ2hpbGQocHJvak9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2goKHByaW9yaXR5TGV2ZWwpID0+IHtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgIHByaU9wdGlvbnMuaW5uZXJIVE1MID0gcHJpb3JpdHlMZXZlbDtcbiAgICAgICAgcHJpT3B0aW9ucy52YWx1ZSA9IHByaW9yaXR5TGV2ZWw7XG5cbiAgICAgICAgcHJpb1Rhc2suYXBwZW5kQ2hpbGQocHJpT3B0aW9ucyk7XG4gICAgICAgICAgICBcbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9GdWxsKSk7XG59XG5mdW5jdGlvbiBkaXNwbGF5VGFzaygpXG57XG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHRvZG9GdWxsLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHRhc2tSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAvLyB0YXNrUm93LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwcm9qZWN0LnByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgICAgICAgIGZvcihjb25zdCBrZXkgaW4gdGFzaylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEuaW5uZXJIVE1MID0gdGFza1trZXldO1xuICAgICAgICAgICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza0RhdGEpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1Jvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gJ3VwZGF0ZSc7XG4gICAgICAgICAgICAvLyByZWFkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlYWRCdG4nKTtcbiAgICAgICAgICAgIC8vIHJlYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VSZWFkKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2suYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHVwZGF0ZVRhc2spO1xuXG4gICAgICAgICAgICBsZXQgcmVtb3ZlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnZGVsZXRlJztcbiAgICAgICAgICAgIC8vIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdG4nKTtcbiAgICAgICAgICAgIC8vIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUJvb2spO1xuICAgICAgICAgICAgcmVtb3ZlVGFzay5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZChyZW1vdmVUYXNrKTtcblxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUm93KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuZnVuY3Rpb24gYWRkVGFzaygpXG57XG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZVRhc2sudmFsdWU7XG4gICAgY29uc3QgZGVzYyA9IGRlc2NUYXNrLnZhbHVlO1xuICAgIGNvbnN0IHREYXRlID0gZHVlVGFzay52YWx1ZTtcbiAgICBjb25zdCBwcmlvID0gcHJpb1Rhc2sudmFsdWU7XG4gICAgY29uc3QgdE5vdGVzID0gbm90ZXNUYXNrLnZhbHVlO1xuICAgIGNvbnN0IHRQcm9qID0gcHJvalRhc2sudmFsdWU7XG5cbiAgICB1c2VyVGFzayA9IG5ldyB0b2RvVGFza3ModGl0bGUsIGRlc2MsIHREYXRlLCBwcmlvLCB0Tm90ZXMsIHRQcm9qKTtcblxuICAgIGxldCBwcm9qZWN0SW5kZXggPSB0b2RvRnVsbC5maW5kSW5kZXgocEluZCA9PiBwSW5kLnByb2plY3ROYW1lID09PSB0UHJvaik7XG4gICAgdG9kb0Z1bGxbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3MucHVzaCh1c2VyVGFzayk7XG5cbiAgICBjb25zb2xlLnRhYmxlKHRvZG9GdWxsKTtcbiAgICBjb25zb2xlLnRhYmxlKHVzZXJUYXNrKTtcblxuICAgIGRpc3BsYXlUYXNrKCk7XG59XG5wcmVmaWxsZWRWYWx1ZXMoKTtcbmRpc3BsYXlUYXNrKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbnJlcXVpcmUoJy4vbW9kdWxlcy9uZXdQcm9qZWN0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvbmV3VGFzaycpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=