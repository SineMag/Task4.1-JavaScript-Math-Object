// Task 4.1 Answers 

//Part 3: Coding Exercises
// Exercise 1: Rounding Numbers

const num1 = Math.round(4.789);

const num2 = Math.round(12.345);

const num3 = Math.round(-8.5);

console.log(num1);
console.log(num2);
console.log(num3);


//Exercise 2: Finding Min and Max

const numberSet = Math.max(14, 2, -5, 101, 35, 8);

const numberSets = Math.min(14, 2, -5, 101, 35, 8);
console.log(numberSet);
console.log(numberSets);


//Exercise 3: Powers and Squares 
const base = 5;

const exponent = 3;


const numberForSqrt = 64;

console.log((Math.pow(base, exponent)));

console.log((Math.sqrt(numberForSqrt)));

//Exercise 4: Random Numbers

const randomNum = Math.random();
console.log(randomNum);

const randNumber = Math.floor(Math.random() *10 +1);
console.log(randNumber);

//Exercise 5: Practical Application - Circle Calculations
const radius = 7; 

const pi = Math.PI;

console.log(pi*radius*radius);
console.log((pi*radius*radius).toFixed(2)); //Decimal has only two digits after a comma