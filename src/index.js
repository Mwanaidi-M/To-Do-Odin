import {displayAside} from './modules/asideDisplay';
import { displayProject } from './modules/todosDisplay';

// require('./modules/newProject');
// require('./modules/newTask');
// require('./modules/taskDOM');
// require('./modules/showAll');

function projectDefault()
{
    let inbox = new projectNew('inbox');

    todoFull.push(inbox);

    localStorage.setItem('todos',JSON.stringify(todoFull));
}

displayProject.listProject();
displayProject.listTasks();

displayAside.render();

// createProject.editProjectName(1,'haa');
// createTask.editTask(1,'gym', '2022-05-06','high','go work out', 'home');
// createTask.addTask('laundry', '2022-05-05', 'inbox');
// createTask.addTask('read', '2022-05-06', 'home');
// createTask.addTask('clean', '2022-05-17', 'home');
// createTask.addTask('gym', '2022-06-27', 'inbox');
// createTask.addTask('food', '2022-05-08', 'home');
// createTask.addTask('relax', '2022-05-05', 'inbox');
// createProject.addProject('home');
// createProject.removeProject(1);
// console.log();
// projectDefault();