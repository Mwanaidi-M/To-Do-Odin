import {
  format,
  isDate,
  isToday,
  parseISO,
  addDays,
  differenceInDays,
} from "date-fns";

require("date-fns/format");

const today = Date.now();

const newFormat = format(today, "do MMM YYY");
const newFormat2 = format(today, "YYY-MM-dd");

const after7 = addDays(parseISO(newFormat2), 7);
const maxDay = format(after7, "YYY-MM-dd");
const dayDiff = differenceInDays(parseISO(maxDay), parseISO(newFormat2));
console.log(newFormat);
// console.log(dayDiff);
// console.log(`${m}------------------${newFormat2}`);
