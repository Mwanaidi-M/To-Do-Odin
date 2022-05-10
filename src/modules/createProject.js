/** 
* For this project, after doing some research and referencing, I opted to use IIFE's for all modules as it 
* was simpler to follow and implement.

* PROJECT MODULE:
*/

let createProject = (() => {
    
    // Created a default array to hold the project objects once created.
    let todoFull = []; 

    /** Check if there is a localStorage item present, if not, create a default project objects then add it to the
    *   array then create a localStorage item.

    *    Else, if there is a localStorage item, then retrive it and assign it to the array created.
    */    
    if(localStorage.getItem('todos') === null)
    {
        todoFull = [
            {
            projectName: 'inbox',
            projectTasks: []
            }
        ];
        localStorage.setItem('todos', JSON.stringify(todoFull));
    }
    else
    {
        const getTodos = JSON.parse(localStorage.getItem('todos'));
        todoFull = getTodos;
    }

    /** created the project class made up of the project name and an array to hold the todos related to
     *  the respective project
     */
    class projectNew
    {
        constructor(projectName, projectTasks = [])
        {
            this.projectName = projectName;
            this.projectTasks = projectTasks;
        }
    }

    /** function to add a project which takes the project name as a param;
     * creates a new object for it;
     * pushes the object to the array;
     * update the localStorage item.
     */
    function addProject(pName)
    {
        let newProject = new projectNew(pName);

        todoFull.push(newProject);

        localStorage.setItem('todos', JSON.stringify(todoFull));

        console.table(todoFull);
        
    }

    /** function to update the project name; takes the projectIndex and projectName as params;
     * update the projectName with the new value;
     * check if the projectTasks array is empty or not;
     * if it has todo's then update the projectName there as well.
     * update the localStorage item.
     */
    function editProjectName(pIndex,pName)
    {
        todoFull[pIndex]['projectName'] = pName;

        if(todoFull[pIndex]['projectTasks'].length >= 1)
        {
            todoFull[pIndex]['projectTasks'].forEach(task => {
                task.taskProject = pName;
            });
        }

        localStorage.setItem('todos', JSON.stringify(todoFull));

        console.table(todoFull);
    }

    /**function to delete the respective project; takes the projectIndex as a param;
     * remove the project in the given index from the array.
     * update the localStorage item.
     */
    function removeProject(pIndex)
    {
        todoFull.splice(pIndex, 1);

        localStorage.setItem('todos', JSON.stringify(todoFull));

        console.table(todoFull);
    }

    /**for the IIFE, return the functions as objects to be used in other modules;
     * export the IIFE.
     */
    return {
        todoFull,
        addProject,
        editProjectName,
        removeProject
    }

})();


export { createProject };