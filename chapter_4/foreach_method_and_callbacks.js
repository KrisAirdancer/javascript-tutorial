// FOREACH METHOD AND CALLBACKS

// When a function is passed into another function as an argument it is called a callback.
// Yes, the below code is just a really complicated way to square a value.

const myFunc = (value, callbackFunc) => {
    callbackFunc(value);
};

const anotherFunc = (value) => {
    console.log(value**2);
};

myFunc(50, anotherFunc);

let people = ['Mario', 'Luigi', 'Peach', 'Daisy'];

// The forEach() method takes in a callback function that is used to process the outputs. The forEach() method itself just iterates over the passed list. No more, no less.
people.forEach(function(person) {
    console.log(`Hello, ${person}`);
});

people.forEach(person => {
    console.log(`Hello, ${person}`);
});

// The above two forEach() examples are the same.


// Some more callback examples
// Below, we are generating HTML for each of the names. This HTML is then sent to the browser.

// This gets the people class from index.html
const ul = document.querySelector('.people');

people = ['Mario', 'Luigi', 'Peach', 'Daisy'];

let html = ``;

// This function generates the HTML
people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html; // This puts the html we generated into the <ul class="people"></ul> in the index.html file and ultimately it goes to the browser.