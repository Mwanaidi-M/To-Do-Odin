// CLASS MODULE:

import {createProject} from './createProject';

// class todoTasks
// {
//     constructor(title, description, dueDate, priority, notes, project)
//     {
//         this.taskTitle = title;
//         this.taskDescription = description;
//         this.taskDueDate = dueDate;
//         this.taskPriority = priority;
//         this.taskNotes = notes;
//         this.taskProject = project;
//     }

// }

// export { todoTasks };

let createTask = (() => {

    /** created class for the task and its properties. */
    class newTask
    {
        constructor(title, dueDate, priority, notes, project)
        {
            this.taskTitle = title;
            this.taskDueDate = dueDate;
            this.taskPriority = priority;
            this.taskNotes = notes;
            this.taskProject = project;
        }
    }

    /** function to create a new task that takes the properties as params;
     * create a new task object given the params;
     * push the object to the projectTasks array;
     * update the localStorage item.
     */
    function addTask(title, dueDate, project, priority, notes)
    {
        let projectIndex = createProject.todoFull.findIndex(pr => pr.projectName === project);

        const taskNew = new newTask(title, dueDate, priority, notes, project);

        // console.log(taskNew);
        createProject.todoFull[projectIndex]['projectTasks'].push(taskNew);

        localStorage.setItem('todos', JSON.stringify(createProject.todoFull));

        console.table(createProject.todoFull);
    }

    /** function to edit the task that takes the properties a params and the task index;
     * update the values with the new values given;
     * update the localStorage item.
     */
    function editTask(taskIndex, title, dueDate, priority, notes, project)
    {
        let projectIndex = createProject.todoFull.findIndex(pr => pr.projectName === project);

        createProject.todoFull[projectIndex]['projectTasks'][taskIndex]['taskTitle'] = title;
        createProject.todoFull[projectIndex]['projectTasks'][taskIndex]['taskDueDate'] = dueDate;
        createProject.todoFull[projectIndex]['projectTasks'][taskIndex]['taskPriority'] = priority;
        createProject.todoFull[projectIndex]['projectTasks'][taskIndex]['taskNotes'] = notes;

        localStorage.setItem('todos', JSON.stringify(createProject.todoFull));

        console.table(createProject.todoFull[projectIndex]['projectTasks']);
    }

    /** function to delete the task given the projectIndex and taskIndex as params;
     * remove the respective task from the array;
     * update the localStorage item.
     */
    function deleteTask(projectIndex, taskIndex)
    {
        createProject.todoFull[projectIndex]['projectTasks'].splice(taskIndex, 1);

        localStorage.setItem('todos', JSON.stringify(createProject.todoFull));

        console.table(createProject.todoFull);
    }

     /**for the IIFE, return the functions as objects to be used in other modules;
     * export the IIFE.
     */
    return {
        addTask,
        editTask,
        deleteTask
    }
})();

export { createTask };