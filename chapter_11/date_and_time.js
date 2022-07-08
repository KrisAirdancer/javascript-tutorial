// DATE AND TIME
// This file pairs with index_1.html

const timeNow = new Date();

console.log(timeNow);
console.log(typeof timeNow);

// Year, month, day, time
console.log('getFullYear:', timeNow.getFullYear());
console.log('getMonth:', timeNow.getMonth()); // This returns a zero-based integer (January = 0)
console.log('getDate:', timeNow.getDate());
console.log('getDay:', timeNow.getDay());
console.log('getHours:', timeNow.getHours());
console.log('getMinutes:', timeNow.getMinutes());
console.log('getSeconds:', timeNow.getSeconds());

// Timestamps
console.log('timestamp:', timeNow.getTime()); // Number of miliseconds from Jan 1, 1970

// Date strings
console.log(timeNow.toDateString());
console.log(timeNow.toTimeString());
console.log(timeNow.toLocaleString());

// More on Timestamps

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime(); // Difference between two times.
console.log(diff);

const mins = Math.round((diff / 1000) / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, 'minutes');
console.log(hours, 'hours');
console.log(days, 'days');

// Converting timestamp objects into Date objects
// We can take a number of miliseconds between two dates, assume the start date is the epoch, and create a new date object from there.
console.log(new Date(1637349404340)); // The integer is the number of miliseconds since Jan 1, 1970