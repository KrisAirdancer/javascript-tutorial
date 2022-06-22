// Template strings (aka. template literal)
const title = "Best reads of 2022";
const author = "Mario";
const likes = 30;

// Concatenation
let concat = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(concat);

concat = `The blog called ${title} by ${author} has ${likes} likes.`
console.log(concat);

// Creating HTML templates
// This fills hte HTML with the contents of the variables. Look in the console on a browser to see how this works.
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes.</span>
`;
console.log(html);


console.log('***** END string_templates *****');