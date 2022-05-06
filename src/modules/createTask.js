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

    function addTask(title, dueDate, project, priority, notes)
    {
        let projectIndex = createProject.todoFull.findIndex(pr => pr.projectName === project);

        const taskNew = new newTask(title, dueDate, priority, notes, project);

        // console.log(taskNew);
        createProject.todoFull[projectIndex]['projectTasks'].push(taskNew);

        localStorage.setItem('todos', JSON.stringify(createProject.todoFull));

        console.table(createProject.todoFull);
    }

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

    function deleteTask(projectIndex, taskIndex)
    {
        createProject.todoFull[projectIndex]['projectTasks'].splice(taskIndex, 1);

        localStorage.setItem('todos', JSON.stringify(createProject.todoFull));

        console.table(createProject.todoFull);
    }

    return {
        addTask,
        editTask,
        deleteTask
    }
})();

export { createTask };