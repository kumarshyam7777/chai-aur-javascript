let score = "333";

console.log(typeof score);

const valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

let mixedNum = "97jkl";

console.log(typeof mixedNum);
console.log(mixedNum);

let valueInNum = Number(mixedNum);
console.log(typeof valueInNum);
console.log(valueInNum); // NaN,because there is mixed of string and number together.

let valueOfX = null;
console.log(typeof valueOfX); // It returns the object, in javascript null is an Object.
console.log(valueOfX);

console.log(Number(valueOfX)); // It returns 0, because null is falsy value in javascript, all fasly value is 0 in javascript.

let undefinedVal = undefined;
console.log(Number(undefinedVal)); // It returns NaN, converting the undefined into a Number, which is not possible, except any number in the "" converts into a Number and truthy and falsy values.

let run = true;
console.log(Number(run)); // true is a truthy value, so Number() objects converts the true to 1.

let x = "12";
let y = 3;

// In all Arithmetic operator , except add , all other substract, multiply and Division and Modulus Operator is performed with one string type number variable ..

console.log(x - y); // 9
console.log(x * y); // 36
console.log(x % y); // 0
console.log(x / y); // 4
console.log(+true); // concate with + covert the boolean to a number i.e, 1, although true is a truthy value.
console.log(+""); // concate with - covert the boolean to a number, i.e, 0.

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

let a = 5;

let b = ++a;

console.log(`value of a is ${a} and  value of b is ${b}`);

let num1 = 38;
let num2 = num1++;
console.log(`value of num1 is ${num1} and value of num2 is ${num2} `);
