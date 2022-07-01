// SUBMIT EVENTS
// This file pairs with index_1.html

// Regex Testing: https://regex101.com/

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username'); // This is one way to get the username field form the form

const usernamePattern = /^[a-zA-Z]{6,10}$/;

form.addEventListener('submit', e => {
    e.preventDefault(); // This prevents the default behavior of submitting a form. This allows us to define our own behavior from scratch.
    // console.log(form.username.value); // This gets the value from the username field in the form

    // Input validation
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        // Valid input
        feedback.textContent = 'Username is valid';
    } else {
        // Invalid input
        feedback.textContent = 'Username is invalid';
    }
});

// Live feedback - marks the input as valid/invalid as the user is typing

// This listens for the event that fires when a key is released.
// Not sure why, but this isn't working...It requires that I click off of the texbox before it applies the class.
form.username.addEventListener('onkeyup', e => {
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) { 
        // console.log('Valid');
        form.username.setAttribute('class', 'valid_input'); // The setAttribute() method completely overrides any classes already applied to the target element. That is, it removes any existing classes and adds the new one.
    } else {
        // console.log('Invalid');
        form.username.setAttribute('class', 'invalid_input');
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