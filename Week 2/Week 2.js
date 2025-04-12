let age = 25;
let isAdult = age >= 18;
console.log("Is Adult:", isAdult);

let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

let n = 7;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log(`The number ${n} is ${result}.`);

let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log("Numbers from 1 to 5:", numbers);

function square(num) {
  return num * num;
}
console.log("Square of 4:", square(4));
