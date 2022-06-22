// Booleans & Comparisons
console.log(true, false);

// Methods that return booleans
let email = "mario@pipedream.com";

let result = email.includes('@');
console.log(result); // Returns true if found and false otherwise.

let names = ['mario', 'luigi', 'peach', 'daisy'];

result = names.includes('daisy'); // .includes is also a method that works on arrays.
console.log(result);

// Comparision Operators
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 20);
console.log(age >= 20);


let firstName = 'Mel';

// Can compare strings by value this way. This comparison is case sensitive when comparing strings.
// This is "loose comparison" which doesn't take the type of the object into account.
console.log(firstName == 'Mel');
console.log(firstName == 'mel');

// This comparison is based on the ASCII value of the characters in order. That is capitals come before lowercase (they have a smaller ASCII value) and A comes before Z (A has a smaller ASCII value).
console.log(firstName > 'mel'); // false
console.log('adam' > 'mel'); // false
console.log('Adam' < 'mel'); // true
console.log('Adam' < 'Mel'); // true

console.log('***** END booleans_and_comparisons *****');