// POPUP
// This file pairs with popup.html

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const btn_close = document.querySelector('.popup-close');

// This makes the popup visible
button.addEventListener('click', () => {
    popup.style.display = 'block';
});

// This closes the popup when the 'X' is clicked
btn_close.addEventListener('click', () => {
    popup.style.display = 'none';
});

// This closes the popup when the background behind the popup is clicked. Remember, the grey overlay behind the white popup box is also part of the popup box, so we apply the event listener to the popup itself. Note that this will close the popup even when the white popup box is clicked.
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});