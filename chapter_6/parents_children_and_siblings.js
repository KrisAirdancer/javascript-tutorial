// PARENTS, CHILDREN, AND SIBLINGS

// Get the article
const article = document.querySelector('article');

// Get the children from the element
console.log(article.children);

// Converting the HTMLCollection of children nodes into an array to make it iterable (so we can use forEach() on it). It returns a new array with the same data as the collection it is passed.
let children = Array.from(article.children);
console.log(children);

// Adding a class to every child element
children.forEach(child => {
    child.classList.add('article-element');
});


// Find the parent element of a child element

// Get the element
const title = document.querySelector('h2');

// Get the parent of the element
console.log(title.parentElement);

// Chaining to get a parent that is farther up the tree
console.log(title.parentElement.parentElement);


// Getting siblings

// Get the next sibling element
console.log(title.nextElementSibling);

// Get the previous sibling element
console.log(title.previousElementSibling);


// More chaining
console.log(title.nextElementSibling.parentElement.children);