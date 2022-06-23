// Switch statements

const grade = 'A';

// The not so good way
if (grade === 'A') {

} else if (grade === 'B') {

} else if (grade === 'C') {

} else if (grade === 'D') {

} else if (grade === 'F') {

} else {

}

// It's better with switch statements

// Note that the switch comparisons use strict equality checks. eg. 'a' != 'A'
switch (grade) {
    case 'A':
        console.log('You got an A');
        break;
    case 'B':
        console.log('You got a B');
        break;
    case 'C':
        console.log('You got a C');
        break;
    case 'D':
        console.log('You got a D');
        break;
    case 'F':
        console.log('You got an F');
        break;
    default:
        console.log('Your grade has not yet been posted.')
}