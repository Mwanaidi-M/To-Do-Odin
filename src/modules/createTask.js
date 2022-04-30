
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

export { todoTasks };