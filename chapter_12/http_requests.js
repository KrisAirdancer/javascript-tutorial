// HTTP REQUESTS
// This file pairs with index_2.html

/* This listener fires every time the state of the request changes. There should be
 * 4 phases in a basic request:
 * 1. OPENED - open() has been called.
 * 2. HEADERS_RECEIVED - send() has been called, and headers and status are available.
 * 3. LOADING - Downloading: responsetest holds partial data.
 * 4. DONE - The operation is complete.
 */

const getTodos = (resource, callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText); // This converts the JSON string into an array of JavaScript Objects
                resolve(undefined, data);
            } else if (request.readyState === 4) {
                resject('Failed to fetch data.')
            }
        });
    
        // Setup the request
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        // Send the request
        request.send();
    });
};

// console.log(1);
// console.log(2);

/**
 * This calls one after the next such that each is exectued in order. That is, the next one
 * only executes after the one before completes.
 * 
 * This is the WRONG way to do this. Use promises and promise chaining instead.
 */ 
// getTodos('./todos/luigi.json', (err, data) => { // This is non-blocking - it is async
//     console.log(data);
//     getTodos('./todos/mario.json', (err, data) => { // This is non-blocking - it is async
//         console.log(data);
//         getTodos('./todos/shaun.json', (err, data) => { // This is non-blocking - it is async
//             console.log(data);
//         });
//     });
// });

// console.log(3);
// console.log(4);

// This is the better way (vs above). Still three calls to getTodos()
getTodos('json/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('json/mario.json');
  }).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('json/shaun.json');
  }).then(data => {
    console.log('promise 3 resolved:', data);
  }).catch(err => {
    console.log('promise rejected:', err);
  });

  // Another example. Just a single call this time.
  getTodos('todos/luigi.json').then(data => {
    console.log('Promise resolved: ', data);
}).catch(err => {
    console.log('Promise rejected: ', err)
});

/***** PROMISES *****/

const getSomething = () => {

    return new Promise((resolve, reject) => {
        resolve('dummy data');
        reject('there was an error');
    });
};

// This is the "messy" way to handle promises.
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// This is a better way to handle promises. Here, we use '.catch' instead.
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

/**
 * A promise has one of two outcomes:
 * 1) It is resolved (the operation completed successfully)
 * 2) It is rejected (the operation fails)
 * 
 * - We conduct the operation insdie the Promise((resolve, reject) => { // Operation here });
 * - Resolve and Reject are functions built into JavaScript
 * - The .then() function, when called on a function that returns a Promise, fires when that function's 
 *   promise resolves. eg. foo().then()
 *  - The first callback function passed to .then() fires if the promise 'resolves' and the second
 *    fires if the promise 'rejects'.
 *  - The second function can be handled with '.catch()'.
 */

