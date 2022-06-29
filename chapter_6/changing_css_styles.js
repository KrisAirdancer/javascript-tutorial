// CHANGING CSS STYLES
// Use with index_3.html

const title = document.querySelector('h1');

// This overrides the orange color set on the html object in index_3.html.
// title.setAttribute('style', 'margin: 50px;'); // Note the inclusion of the semi-colon

// The downside of using the setAttribute method, it overrides what is currently there. If we want to add to what is already there we can use the 'style' proeprty.

// This returns all of the properties and their values that are applied to the specified html element.
console.log(title.style);
console.log(title.style.color); // This returns the value of the color property on the title element.
title.style.margin = '50px'; // This leaves the orange color and adds the margin.
title.style.color = 'crimson'; // This changes the color.

// For properites with hyphenated names, we use camel case instead. eg. 'font-size' becomes 'fontSize'. This convention is reflexted in the names that are returned in the style object that we retrieved above on line 12. That is, that object will have the hyphenated names formatted in camel case already.
title.style.fontSize = '60px';

title.style.margin = ''; // This removes the margin from the element. The property isn't just set to an empty string, it removes it from the element entirely. Use inspect to see this.


// Note that this method of adding CSS to HTML is only for changes that need to happen as the site is used. We want to build the base CSS styling in a style.css document instead.