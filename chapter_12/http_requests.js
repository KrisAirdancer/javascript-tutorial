// HTTP REQUESTS
// This file pairs with index_2.html

const request = new XMLHttpRequest();

/* This listener fires every time the state of the request changes. There should be
 * 4 phases in a basic request:
 * 1. OPENED - open() has been called.
 * 2. HEADERS_RECEIVED - send() has been called, and headers and status are available.
 * 3. LOADING - Downloading: responsetest holds partial data.
 * 4. DONE - The operation is complete.
 */
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});

// Setup the request
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// Send the request
request.send()
