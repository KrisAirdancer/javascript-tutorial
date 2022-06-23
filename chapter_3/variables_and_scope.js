// Variables and Scope

let age = 30; // This variable has global scope b/c it has not been declared inside a code block.

// let age = 50; // This throws an error b/c we cannot redeclare a variable in the same scope.

if (true) {

    let age = 50; // This, however, is okay because this copy of age is only available in the scope of this if block. Note that we still have access to the copy of age outside the block, but only if we don't declare a new age inside the code block.
    let date = 10;

    console.log('Inside the code block: ', age);
    console.log('Inside the code block: ', date);

    if (true) {
        console.log('Inside second code block: ', age); // In this case, the age variable is filled using the closest (scope wise) declaration of age. In this case, the age inside the first if block. Not the age outside the first if block.
    }
}

console.log('Outside the code block: ', age);
// console.log('Outside the code block: ', date); // This doesn't work b/c date was declared inside the if block.


// This behavior also applies to const as well.
// This behavior does NOT apply to var.

// var ignores block scope. It makes all variables global.

if (true) {
    var glob = 10;
    let notGlob = 20;
    console.log('Inside code block: ', glob);
    console.log('Inside code block: ', notGlob);
}

console.log('Outside code block: ', glob); // This works.
// console.log('Outside code block: ', notGlob); // This doesn't. It throws an error.