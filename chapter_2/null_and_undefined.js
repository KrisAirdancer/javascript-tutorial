let age;
// If we don't initialize a variable, the variable is undefined. This would be a compiler error in Java or C#.
console.log(age, age + 3, `the age is ${age}`);

let notAge = null;
// If something is set to null or has no value for some reason, it is null.
console.log(age, age + 3, `the age is ${notAge}`);

// If we look at the console output from the above statements, we will see that we get errors.

console.log('***** END null_and_undefined *****');