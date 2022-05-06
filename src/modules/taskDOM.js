import { format, isDate, isToday, parseISO, addDays, differenceInDays } from 'date-fns'

require('date-fns/format');
// const getBtn = document.getElementById('test-btn');
// let displayArea = document.getElementById('test-here');



// function showProjects()
// {
//     let todoFull = JSON.parse(localStorage.getItem('todos'));

//     displayArea.innerHTML = '';

//     for(const pr of todoFull)
//     {
//         const pl = document.createElement('option');
//         pl.innerHTML = pr['projectName'];
//         displayArea.appendChild(pl);
//     }
//     console.table(todoFull);
// }
// // showProjects();
// getBtn.addEventListener('click', showProjects);

// console.clear();

let today = Date.now();

let newFormat = format(today, 'dd-LLL-YYY');
let newFormat2 = format(today, 'YYY-MM-dd');


let after7 = addDays(parseISO(newFormat2) , 7);
let maxDay = format(after7, 'YYY-MM-dd');
let dayDiff = differenceInDays(parseISO(maxDay), parseISO(newFormat2));
console.log(after7);
console.log(dayDiff);
// console.log(`${m}------------------${newFormat2}`);