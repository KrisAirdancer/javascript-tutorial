// Strings
console.log('Hello world');

let email = 'mario@pipedream.com';
console.log(email);

// String Concatenation
let firstName = 'Haruhi';
let lastName = 'Suzumiya';

let fullName = firstName + ' ' + lastName;
let greeting = `Hello, ${firstName} ${lastName}`;
console.log(fullName);
console.log(greeting);

// Indexing into strings
console.log(fullName[0]);

// String Methods
console.log(fullName.length);
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

let lastIndex = email.lastIndexOf('o');

result = email.slice(5, 8);
console.log(result);

result = email.substr(0, 5);
console.log(result);

result = email.replace('@', '++');
console.log(result);



