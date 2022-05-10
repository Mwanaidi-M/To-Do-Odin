// ASIDE DISPLAY MODULE

import { format, parseISO, addDays, differenceInDays } from 'date-fns'

import { createProject } from "./createProject";
import { createTask } from "./createTask";
import { displayProject } from './todosDisplay';

const getViewOptions = document.querySelectorAll('.view-options>div');
const displayAllTodos = document.getElementById('all');
const displayInbox = document.getElementById('inb');
const heading = document.getElementById('project-title');
const msg = document.getElementById('p-msg');

// task display container
const taskContainer = document.getElementById('taskShow');

let displayAside = (() => {

    /** function to enable user click on elements on the aside area and view any related tasks
     *  for the clicked item in that area.
     */
    function render()
    {      
        let today = Date.now();
        let todayDate = format(today, 'YYY-MM-dd');

        if(createProject.todoFull.length >=1)
        {
            msg.innerHTML = '';
            
            getViewOptions.forEach(opt => {
                opt.addEventListener('click', (e) => {
                    taskContainer.innerHTML = '';

                    if(opt.id === 'all')
                    {
                        heading.innerHTML = 'To~Dos';
                        createProject.todoFull.forEach(project => {
                            project.projectTasks.forEach(task => {
                                // console.log(task);
                                displayProject.defaultTaskDisplay(task);
                            })
                        })
                    }
                    else if(opt.id === 'inb')
                    {
                        heading.innerHTML = 'Inbox';
                        let inbox = createProject.todoFull.findIndex(pr => pr.projectName === 'Inbox' || 'inbox');
                        createProject.todoFull[inbox].projectTasks.forEach(task => {
                            // console.log(task);
                            displayProject.defaultTaskDisplay(task);
                        })
                        // console.log(opt.innerHTML);
                    }
                    else if(opt.id === 'today')
                    {
                        heading.innerHTML = 'Today';
                        createProject.todoFull.forEach(project => {
                            project.projectTasks.forEach(task => {
                                if(task.taskDueDate === todayDate)
                                {
                                    // console.log(task);
                                    displayProject.defaultTaskDisplay(task);
                                }
                            })
                        })

                        // console.log(opt.innerHTML);
                    }
                    else if(opt.id === 'next7')
                    {
                        heading.innerHTML = 'Next 7 Days';
                        let add7days = addDays(parseISO(todayDate) , 7);
                        let higerDay = format(add7days, 'YYY-MM-dd'); 
                        
                        createProject.todoFull.forEach(project => {
                            project.projectTasks.forEach(task => {
                                if(task.taskDueDate > todayDate && task.taskDueDate <= higerDay)
                                {
                                    // console.log(task);
                                    displayProject.defaultTaskDisplay(task);
                                }
                            })
                        })
                        // console.log(opt.innerHTML);
                    }
                })
            })
        }

        else
        {
            msg.innerHTML = 'You have no projects to view';
        }
    }

    return {
        render
    }
})();

export {displayAside}