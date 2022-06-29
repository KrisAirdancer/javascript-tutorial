// ADDING AND REMOVING CLASSES


// Get the desired element
const content = document.querySelector('p');
console.log(content.innerText);

// Return a list of classes on the object
console.log(content.classList); 

// Adding a new class to the element
content.classList.add('error'); 

// Removing a class from the element
content.classList.remove('error');

// Adding a class
content.classList.add('success');

// Removing a class
content.classList.remove('success');


// Challenge - adding classes based on the content of that element

const pTags = document.querySelectorAll('p');

pTags.forEach( tag => {
    if (tag.textContent.includes('error')) {
        tag.classList.add('error');
    }
    if (tag.textContent.includes('success')) {
        tag.classList.add('success');
    }
});

// .innerText vs .textContent
// .innerText won't return ann text inside of tags intenal to the text, but .textContent will
// eg. For '<p>lorem <span>success</span> ipsum</p>', .innerText will return 'lorem ipsum' and .textContent will return 'lorem success ipsum'


// Toggling classes on and off
// That is, if an element has a class, remove it; and if an element doesn't have a class, add it.

// Pull the element we want
const title = document.querySelector('.title');

// Will add the 'test' class because the element doesn't already have it.
title.classList.toggle('test'); // This will add the 'test' class if the element doesn't have it, and remove it if it does.

// Will remove the 'title' class because the element already has it.
title.classList.toggle('title');