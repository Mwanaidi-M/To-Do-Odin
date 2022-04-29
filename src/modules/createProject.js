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

export { projectNew };