// SUBMIT EVENTS
// This file pairs with index_1.html

// Regex Testing: https://regex101.com/

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username'); // This is one way to get the username field form the form

form.addEventListener('submit', e => {
    e.preventDefault(); // This prevents the default behavior of submitting a form. This allows us to define our own behavior from scratch.
    // console.log(form.username.value); // This gets the value from the username field in the form

    // Input validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,10}$/;

    if (usernamePattern.test(username)) {
        // Valid input
        feedback.textContent = 'Username is valid';
    } else {
        // Invalid input
        feedback.textContent = 'Username is invalid';
    }
});


// Testing Regex
const username = 'MyName';
const pattern = /^[a-zA-Z]{6,}$/; // This defines a regular expression

// This method returns a boolean. true if the argument matches the regular expression; false otherwise.
// let result = pattern.test(username);
// console.log(result);

// if (result) {
//     console.log('regex test passed');
// } else {
//     console.log('regex test failed');
// }

let result = username.search(pattern); // This method checks the string for a match to the regex and returns the index location of the match. Returns -1 if no match.
console.log(result);