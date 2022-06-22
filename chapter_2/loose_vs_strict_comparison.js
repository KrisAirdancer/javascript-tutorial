let age = 25;

// Loose comparison (different types can be equal)

console.log(age == 25); // true
console.log(age == '25'); // The returns true. This converts the string into a number before comparing the two elements. JS will try to get the two elements of comparision into the same object type beforehand or will use JS's version of a comparator.

// Loose equality isn't always the best way to compare things. It might not give you a compiler error or a runtime error, but it leaves a lot of ambiguity in the code. It is therefore better to use strict comparison whenever possible. Strict comparison means more predictable results.

// Strict comparison (different types cannot be equal)

console.log(age === 25); // true
console.log(age == '25'); // false - does not do type conversion/comparator operations
console.log(age !== 25); // false
console.log(age !== '25'); // true

console.log('***** END loose_vs_strict_comparison *****');