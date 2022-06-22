// Basic indexed for loop

for(let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
}

// Looping over an array

const firstNames = ['Mario', 'Luigi', 'Peach', 'Daisy'];

for(let i = 0; i < firstNames.length; i++) {
    // console.log(firstNames[i]); // Printing to the console
    let html = `<div>${firstNames[i]}</div>`; // Generating HTML strings
    console.log(html);
}

// This looks like it would work, but it actually just prints out the index of each time.
for (let firstName in firstNames) {
    // console.log(firstName); // Printing to the console
    let html = `<div>${firstName}</div>`; // Generating HTML strings
    console.log(html);
}

// A foreach loop is done as follows.
firstNames.forEach( (firstName, index) => {
    console.log(firstName, index);
});

// Alternatively, we don't need the index
firstNames.forEach( (firstName) => {
    console.log(firstName);
});

// While loops

let index = 0;

while(index < 5) {
    console.log(`Iteration: ${index}`);
    index++;
}

// Do while loops

// These run at least once. Even if the conditional statement is never true.

index = 5;

do {
    console.log(`Do While Iteration: ${index}`);
    index++;
} while(index < 5);