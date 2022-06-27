// PRIMATIVE AND REFERENCE TYPES

// Primative Types

let score_1 = 50;
let score_2 = score_1;

console.log(`score_1: ${score_1}, score_2: ${score_2}`);

score_1 = 100;

console.log(`score_1: ${score_1}, score_2: ${score_2}`);


// Reference Types

user_1 = {firstName: 'Bill', age: 43};
user_2 = user_1;

console.log(user_1, user_2);

user_1.age = 109;

console.log(user_1, user_2);

user_1.firstName = 'Jane';

console.log(user_1, user_2);