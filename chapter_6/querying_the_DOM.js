// QUERYING THE DOM
// Use with index.html


/***** Query Selectors *****/


// We can access elements (nodes) in the DOM using Query Selection.

// This pulls an element from the DOM (essentially, it is pulling an element from an HTML page)
const paragraph = document.querySelector('p'); // This will pull the first `<p>` tag that it finds.
console.log(paragraph);

// We can also select CSS classes from the DOM
const err = document.querySelector('.error'); // This will pull the first tag with the .error class that it finds.
console.log(err);

// This selects a more specific element based on multiple criteria
const divError = document.querySelector('div.error'); // This finds the first instance of a div tag with a class of 'error'
console.log(divError);

// This returns a collection of all of the p tags in the document
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);
console.log(paragraphs[1]);

// Or...
paragraphs.forEach(para => {
    console.log(para);
});

// NOTES

// If we want to get a unique selector for an elemnet on a page, we can use the in-browser dev-tools to select an element using "inspect" then right click on the HTML of that element and select "Copy" and "Copy Selector"


/***** Other Ways to Query the DOM *****/

// Get an element by ID

const title = document.getElementById('page-title');
console.log(title);

// Remember, HTML pages have only one instance of each ID (assuming you did your job correctly), so this will return exactly the element you specify.

// Get elements by their class name

const errors = document.getElementsByClassName('error'); // No need for the doe (.), it is implied by the fuction name.
console.log(errors);
console.log(errors[0]);
// This returns an HTML collection. NOT a NodeList. As such, we cannot use .ForEach on the object that is returned by this function. NodeList is iterable, HTMLCollection isn't.

// Get elements by their tag name

const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[0]);
// Again, cannot iterate with .ForEach b/c this is an HTMLCollection.