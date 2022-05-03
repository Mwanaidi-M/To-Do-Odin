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

export { todoFull, projectNew };