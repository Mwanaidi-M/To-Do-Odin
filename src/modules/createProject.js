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

export { todoFull, projectNew };