// Function Declarations & Expressions

greet(); // We can do this because the function declaration is run before the rest of the code in this file.
// speak(); // This throws an error because function expresssions are NOT run before the rest of the code.

// Defining a function
function greet() {
    console.log("Hello there!");
}

// Invoking (calling) the function
greet();

// Storing functions in variables

// If we use const, we cannot change the function assigned to this variable later
const speak = function() { // This is a function expression
    console.log("Spoken")
}; // Semi-colons are required for function expressions

// Calling the function expression
speak();

// Function declarations and function expressions are largely the same. BUT, function expressions are not hoisted, while function declarations are.

// Hositing:
    // Certain parts of JavaScript are run before the rest of the code, even if they are defined lower down in the code file.
    // Function declarations ARE hoisted, while function expressions are NOT hoisted.

// Best Practices
    // It is good to get into the habit of using function expressions because it forces you to 
    // put the functions at the top of the file (especially when it is not a class). This makes
    // it easy to find all of the functions in a given file.