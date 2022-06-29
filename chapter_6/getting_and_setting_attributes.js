// GETTING AND SETTING ATTRIBUTES
// Use with index_2.html

// Get the element from the document
const link = document.querySelector('a');

// This gets the attribute from the html element
console.log(link.getAttribute('href')); // The console output from this statement is the the contens of the href attribute on the html element stored in 'link'

// This changes the href attribute value in the 'link' element
link.setAttribute('href', 'www.goldenramenbowl.com');

// This statement changes the text in the html element (this is not necessary to change an attribute, it just makes sense in this context)
link.innerText = 'Golden Ramen Bowl'

// Another example - changing the class attribute of elements

const mssg = document.querySelector('p')
mssg.setAttribute('class', 'success'); // This sets the 'class' attribute to have a value of 'success'
console.log(mssg.getAttribute('class'));

// Adding attributes that don't already exist

// The setAttribute() function will update the atribute if it already exists, OR add the attribute to the html element if it doesn't already exist.
mssg.setAttribute('style', 'color: pink');

