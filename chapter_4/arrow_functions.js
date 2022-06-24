// ARROW FUNCTIONS

// A regular function
// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };

// An arrow function
// const calcArea = (radius) => {
// return 3.14 * radius**2;
// }; // The semi-colon is still necessary b/c this is still a function expression

// A simplified arrow function
// const calcArea = radius => { // We don't need the parentheses when there is only one parameter. If there are more than one, we need the parenthestes.
//     return 3.14 * radius**2;
// };

// Further simplified - this is also valid
const calcArea = radius => 3.14 * radius**2; // We can use the {}, but we cannot use the 'return' keyword.

console.log(calcArea(10));


// All of the above functions are equivalent.
    // Except, it should be noted that arrow functions don't bind to the 'this' keyword the same as
    // functions defiend the coventional way. This will be discussed later in the course in more detail.


// Some more practice and examples

// const greet = function() {
//     return "Hello, world!";
// };

const greet = () => "Hello world!";

console.log(greet());

// const bill = function(products, tax) {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([100, 80, 10, 40], 0.2));