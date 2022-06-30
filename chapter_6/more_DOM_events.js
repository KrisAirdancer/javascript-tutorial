// MORE DOM EVENTS
// This file pairs with index_7.html

// Additional events are documented here: https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events 

// Copy events - when an element is copied (like copy and paste)

const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('Copied!');
});


// Mouse move events
// Mouse move events use the offsetX and offsetY properties of the event object.

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `(${e.offsetX}, ${e.offsetY})`;
});


// Scroll events

// Adding an event listener directly to the docuement obejct
document.addEventListener('wheel', e => {
    // pageX and pageY are the position of the curser on the screen when the scroll wheel is rotated relative to the top left corner of the screen (0, 0).
    console.log(e.pageX, e.pageY);
});