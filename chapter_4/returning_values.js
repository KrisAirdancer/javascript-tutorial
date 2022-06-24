// RETURNING VALUES FROM FUNCTIONS

const calcArea = function(radius) {
    return 3.14 * radius**2; // The double asteriks are an exponent
};

let area = calcArea(11);
console.log(area);

console.log(calcArea(12));