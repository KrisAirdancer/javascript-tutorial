// ARRAY METHODS
// This file pairs with index_1.html


// .filter() method

const scores = [10, 23, 30, 43, 45, 50, 59, 60, 61];

// If the callback returns true, the item is kept in the array, if the callback returns false, the item is removed.
// .filter() is non-destructive. It doesn't change the original array.
const fScores = scores.filter((score) => {
    // console.log(`${score} % 10 = ${score % 10}`);
    if (score % 10 != 0) {
        return false;
    } else {
        return true;
    }
});

console.log(fScores);

const users = [
    {name: 'Joe', premium: true}, // 'premium' just indicates if the user has a subscription (premium account) or not. These are variables not system/JavaScript keywords.
    {name: 'Ian', premium: false},
    {name: 'Cason', premium: true},
    {name: 'Chris', premium: false}
];

const premiumUsers = users.filter(user => {
    return user.premium;
});

console.log(premiumUsers);


// .map() method

// .map() creates a new array based on the original using the processing method defined by the passed callback function.

const prices = [10, 23, 30, 43, 45, 50, 59, 60, 61];

const salePrices = prices.map(price => {
    return price / 2;
});

console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

const saleProducts = products.map(product => {
    if (product.price >= 30) {
        // If we were to change `product.price` directly, we would be modifying the original array. That would make this a destructive operation.
        return { name: product.name, price: product.price / 2 };
    } else {
        return { name: product.name, price: product.price };
    }
});

console.log(saleProducts);


// .reduce() method

const points = [10, 23, 30, 43, 45, 50, 59, 60, 61];

// the variable 'count' persists between iterations. It can be named anything.
// Here, we are counting how many scores are over 50 points.
const result = points.reduce((count, current) => {
    if (current > 50) {
        count++;
    }
    return count;
}, 0); // This final value (argument) sets the initial value of the accumulator variable (in this case 'count' is the accumulator variable).

console.log(result);

const playerScores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
  ];

const mario_totalScore = playerScores.reduce((totalScore, current) => {
    if (current.player === 'mario') {
        totalScore += current.score; 
    }
    return totalScore;
}, 0);

console.log(mario_totalScore);


// .find method

// Returns the first value in an array that matches a specified criteria.

const highScores = [10, 23, 30, 43, 45, 50, 59, 60, 61];

// Returns the first value that evaluates to true when it is tested.
const firstHighScore = scores.find(score => {
    return score > 50;
});

console.log(firstHighScore);


// .dort() method

const moreScores = [34, 45, 1, 23, 4, 9, 90];

const firstNames = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

const playersList = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];

// Sorts the array. This is destructive: It changes the original array.
firstNames.sort();
console.log(firstNames);

// .sort() only sorts numbers by the first digit. So 9 will come after 23.
moreScores.sort();
console.log(moreScores);

// Sorts the names from largest to smallest
firstNames.reverse();
console.log(firstNames); 

// Resolving the 9 after 23 .sort() issue.
// .sort() doesn't know what to sort by and defaults to something basic. If we want different behavior, we have to specify it.
// We provide a function called the "compare" function - this is basically a comparator.
// a and b are the parameters for the compare function. The arrow function being passed is the compare function.
// The comparator function returns -1, 0, or 1. If a comes first, we return -1; if b first, return 1; and if a === b, 0.
playersList.sort((a,b) => {
    if (a.score > b.score) {
        return -1;
    } else if (a.score < b.score) {
        return 1;
    } else {
        return 0;
    }
});

console.log(playersList);

// This is equivalent to the above sort() statement. b/c the values that are returned don't have to be 1 or -1 they just need to be positive or negative.
playersList.sort((a,b) => b.score - a.score);

console.log(playersList);

// This sorts the array without the 9 after 23 issue.
moreScores.sort((a,b) => a - b);
console.log(moreScores);


// Method chaining

const moreProducts = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];

  // Before chaining

  const filtered = moreProducts.filter(product => product.price > 20);

  const promos = filtered.map(product => {
      return `The ${product.name} is ${product.price / 2} pounds.`;
  });

  console.log(promos);

  // With chaining

  const chainedPromos = moreProducts
    .filter(product => product.price > 20)
    .map(product => `The ${product.name} is ${product.price / 2} pounds.`);

console.log(chainedPromos);