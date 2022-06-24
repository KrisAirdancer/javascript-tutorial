// OBJECT LITERALS

// This is an object literal
let user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'j.doe@mail.com',
    articles: ['Cats are awesome!', 'My cat ate my wallet!']
}; // Note the use of a semi-colon

// Accessing object properties

console.log(user);
console.log(user.firstName);

user.firstName = "Jane";

console.log(user.firstName);

console.log(user['firstName']); // Can also access properties of objects using bracket notation. The property name must be in stirng format.

user['firstName'] = 'Choji';

console.log(user.firstName);


// Useful use case
// This use case would be useful for doing something with each item in a list during an iteration.

const key = 'firstName';

console.log(user[key]);


// This is, in fact, an object
console.log(typeof user); // This returns type "object"


// NOTES

// Object literals are comprised of properties. These properties are key-value pairs.