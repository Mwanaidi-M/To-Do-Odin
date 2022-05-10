import { format, isDate, isToday, parseISO, addDays, differenceInDays } from 'date-fns'

require('date-fns/format');

let today = Date.now();

let newFormat = format(today, 'do MMM YYY');
let newFormat2 = format(today, 'YYY-MM-dd');


let after7 = addDays(parseISO(newFormat2) , 7);
let maxDay = format(after7, 'YYY-MM-dd');
let dayDiff = differenceInDays(parseISO(maxDay), parseISO(newFormat2));
console.log(newFormat);
// console.log(dayDiff);
// console.log(`${m}------------------${newFormat2}`);