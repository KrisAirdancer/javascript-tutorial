// if statements

const age = 25;

if (age > 20) {
    console.log("Age is greater than 20");
}

const ninjas = ['Joe', 'Ian', 'Cason', 'Chris'];

if (ninjas.length > 3) {
    console.log("Not too many ninjas!");
}

const pwd = 'short';

if (pwd.length >= 12) {
    console.log('Password is strong.');
} else if (pwd.length >= 8) {
    console.log('Password is strongish.');
} else {
    console.log('Password is not long enough.');
}