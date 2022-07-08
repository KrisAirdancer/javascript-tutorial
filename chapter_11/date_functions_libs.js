// DATE FUNCTION LIBRARIES
// This file pairs with index_2.html

// date-fns is a very helpful library: https://date-fns.org/docs/Getting-Started 

const timeNow = new Date();

console.log(dateFns.isToday(timeNow));

// Formatting options
console.log(dateFns.format(timeNow, 'YYYY'));
console.log(dateFns.format(timeNow, 'MMMM'));
console.log(dateFns.format(timeNow, 'dddd'));
console.log(dateFns.format(timeNow, 'Do'));
console.log(dateFns.format(timeNow, 'dddd Do MMMM YYYY'));

// Comparing dates
const before = new Date('February 1 2019 12:00:00');

// Comparing dates and formatting them using Date Fns
console.log(dateFns.distanceInWords(timeNow, before, {addSuffix: true}));