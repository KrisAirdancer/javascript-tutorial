// EVENT BASICS

// Steps to handle events
// 1. Query the DOM to get the element where we expect an even to (possibly) happen
    // This is anywhere that we've placed events. We will know where these locations are. We just need to pull the element into our JavaScript.
// 2. Add an event listener to the event.
// 3. Write a callback function that is triggered when the event listener fires a notification that the event has occurred.


// // Getting the element
// const button = document.querySelector('button');

// // Adding the event listener and passing in the callback function.
// button.addEventListener('click', () => {
//     console.log('Ouch!');
// });


// Adding event listeners to the li tags

const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');

// ul.remove(); // This removes the method from the DOM

items.forEach(item => {
    item.addEventListener('click', e => { // The browser sends an event object when an event is triggered and it is passed to this callback function
        // console.log(e.target); // This returns the tag that was clicked so we know exactly which one it was.
        // e.target.style.textDecoration = 'line-through'; // This applies a style to the elements. Note that the style appears on the site immediately without having to reload the page.
        e.target.remove(); // This removes the clicked element from the DOM. They will reappear if you refresh the page.
    });
});


// Adding items to the list when the button is clicked

const button = document.querySelector('button');

// Adding the event listener and passing in the callback function.
button.addEventListener('click', () => {
    // ul.innerHTML += '<li>New item</li>'; // This adds HTML to the page. A new li element in this case.
    const li = document.createElement('li'); // This creates a new HTML element.
    li.textContent = 'New item';

    // Append to the bottom of the list - appends to the bottom of the parent
    ul.append(li); 

    // Prepend - appends the element to the top of the parent
    // ul.prepend(li);
});


//  Note that event listeners are NOT added to any new tags that are added when we do it this way. The next lesson covers how to do that.