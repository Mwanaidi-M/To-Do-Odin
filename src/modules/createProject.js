import {displayProject} from "./todosDisplay";

let createProject = (() => {
    let todoFull = [];

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
    class projectNew
    {
        constructor(projectName, projectTasks = [])
        {
            this.projectName = projectName;
            this.projectTasks = projectTasks;
        }
    }

    function addProject(pName)
    {
        let newProject = new projectNew(pName);

        todoFull.push(newProject);

        localStorage.setItem('todos', JSON.stringify(todoFull));

        console.table(todoFull);
        
    }


    function editProjectName(pIndex,pName)
    {
        // let projectIndex = todoFull.findIndex((pInd) => pInd.projectName === pName);

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

    function removeProject(pIndex)
    {
        todoFull.splice(pIndex, 1);

        localStorage.setItem('todos', JSON.stringify(todoFull));

        console.table(todoFull);
    }

    return {
        todoFull,
        addProject,
        editProjectName,
        removeProject
    }

})();

// class projectNew
// {
//     constructor(projectName, projectTasks = [])
//     {
//         this.projectName = projectName;
//         this.projectTasks = projectTasks;
//     }

//     // capProjectName()
//     // {
//     //     let nameP = this.projectName;
//     //     nameP = nameP.split('').map((lett, index)=>{
//     //         return index === 0 ? lett.toUpperCase(): lett;
//     //     }).join('');

//     //     this.projectName = nameP; 
        
//     //     return this.projectName  ;
//     // }
// }




export { createProject };