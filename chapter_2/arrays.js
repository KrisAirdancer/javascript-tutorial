// Creating an array
let ninjas = ['Bob', 'John', 'Sally'];
console.log(ninjas);

// Accessing items in an array
console.log(ninjas[1]);

// Changing elements in an array
ninjas[1] = 'Sue';
console.log(ninjas);

// You can store mixed object types in arrays
let randomArray = ['Joe', 20, 'Ian'];
console.log(randomArray);

// Array methods

// Array length (number of elements in the array)
console.log(ninjas.length);

// Joins the array elements with a comma in between
console.log(ninjas.join(','));

// IndexOf - finds the index of the specified element
console.log(ninjas.indexOf('BOb'));

// Concatenating arrays
ninjas = ninjas.concat(['Joe', 'Ryan'])
console.log(ninjas);

// Adding an element to an array.
console.log(ninjas.push('Sara')); // .push returns the number of elements in the array after addition.
console.log(ninjas);

// Removing the last element from an array
console.log(ninjas.pop()) // Returns the removed element
console.log(ninjas);

console.log('***** END arrays *****');