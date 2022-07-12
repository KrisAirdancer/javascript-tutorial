// FETCH API
// This file pairs with index_3.html

// Note: You can only `await` inside async functions. Not outside of them.

// This is sill a messy way to do things. See below for how to clean it up.
// fetch() retrieves the specified resource and returns a promise.
// The promise is only rejected if there is a network issue. It will still resolve if the resource
// doesn't exist or we mistype something. But, it will return a 404 status code.
// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved', response);
//     // This gets the data from the response. This returns a promise
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// })

/**
 * This is the better way to do the above.
 * Notes:
 * - async functions always return promises.
 * - async functions are non-blocking. They don't stop the execution of the code.
 */
const getTodos = async () => {

    // Await pauses execution until the async function has completed.
    const response = await fetch('todos/luigi.json');

    if (response.status !== 200) {
        throw new Error('Cannot fetch the data.');
    }
    const data = await response.json();
    
    return data;
}; 

console.log(1);
console.log(2);

// const test = getTodos(); // This variable will contain a promise b/c that is what is returned by getTodos, an async function.
getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message))

console.log(3);
console.log(4);

