const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //range 1 to 21

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 //default US DOLLAR

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //object
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //3
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // range 0 to 1
console.log((Math.random()*10) + 1); // min value = 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)