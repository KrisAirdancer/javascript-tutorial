// ADDING AND CHANGING PAGE CONTENT

// Here, we learn to change the text inside of document (HTML) elements on a page.

// Step 1: Get the element using a query selector.
const para = document.querySelector('p');

// Step 1.5: Get the text from the element - not necessary, just showing how to see the text in an element

// Step 3: Set the content of the element
para.innerText = "Goodbye, world!";

// Can append text instead.
para.innerText += " More text!";

// Updating text on several elements at once.
const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText = "Boilerplate...";
});

// Changing the HTML of an element. Not just the text.
const content = document.querySelector('.content');
console.log(content.innerHTML); // This returns the HTML in the element
content.innerHTML = "<h2>This is a new header!</h2>";

// Getting fancy
const fancyCont = document.querySelector('.content');
fancyCont.innerHTML = `<p>${fancyCont.innerText}</p>`; // Update the tags, but not the content.

fancyCont.innerHTML = "<p><strong>A list of Mario characters:</strong></p>"

// Outputting an HTML template for each item in a 'database' (list of data from a database)
const people = ['Mario', 'Peach', 'Luigi', 'Daisy'];

content.innerHTML += '<ul>';
people.forEach(person => {
    content.innerHTML += `<li>${person}</li>`;
});
content.innerHTML += '</ul>';
console.log(content.innerHTML);