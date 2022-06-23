// Logical operators

let token_1 = 2;
let token_2 = 12;

if (token_1 > 10 && token_2 > 10) {
    console.log('Both are greater than 10.');
}

if (token_1 > 10 || token_2 > 10) {
    console.log('At least one is greater than 10.');
}

// It is good practice to use parentheses to explicity specify the order of operations for logical operators.

let isRaining = true;

// Using the logical not (!) operator 
if (!isRaining) {
    console.log('It is not raining today!');
} else {
    console.log('It is raining today!');
}