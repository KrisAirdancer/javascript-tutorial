// Type Conversion

let score = '100'; // This is a string
console.log(score);

console.log(score + 1); // This concatenates. It doesn't perform math operations. This yields 1001.

// Getting an object's type
console.log(typeof score); // Returns string

// Converting strings into numbers

// This parses the string and returns a number.
console.log(Number(score));

// If you leave letters in the string you convert using Numbers(), it will return a NaN (not a number)! Not an error!
let faultyScore = 'a';
console.log(Number(faultyScore));

faultyScore = 'Hello';
console.log(Number(faultyScore));

// Converting numbers to strings
let result = String(50);
console.log(result);

// Converting values into booleans
result = Boolean(100);

// Some values are considered true and some false.
    // Zero is false
    // Positive and negative numbers are true
    // Empty strings ('') are false
    // Strings containing vlaues are true

result = Boolean('0'); // This yields true b/c strings of length > 0 always yield true. Length 0 strings resolve to false.

// The above is explicit type conversion. We are explicitly telling the code what conversions to do.

// Implicity type conversion.
    // JavaScript will convert values in some cases when it makes sense. Such as when doing loose comparisions.

console.log('***** END loose_vs_strict_comparison *****');