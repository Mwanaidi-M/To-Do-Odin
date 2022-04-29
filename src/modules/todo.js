import { projectFactory } from './createProject';
import  { todoTasks } from './createTask';


const todoFull = [];
const defaultProject = projectFactory('Inbox');

todoFull.push(defaultProject);

console.log(todoFull);

