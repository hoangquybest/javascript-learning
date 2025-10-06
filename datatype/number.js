const number1 = "4.8";
const number2 = "5";
// number1.parseInt();

//parse
console.log(parseInt(number1));
console.log(parseInt(number2));
console.log(parseFloat(number1));

//Math
const number3 = -10;
const number4 = 10.8;

console.log(Math.abs(number3));
console.log(Math.floor(4.3)); //4
console.log(Math.ceil(4.3)); //4
console.log(Math.round(4.3)); //4
console.log(Math.floor(4.3)); //4

//toFixed(value)
console.log(parseFloat((1 / 3).toFixed(2))); //0.33

//Math.random()
console.log(Math.random()); // 0 -> 1
console.log(Math.random * 10); // 0 -> 10

//Math.max(), Math.min()
Math.max(1, 5, 10); // 10
Math.max(-5, -1, -100); // -1
Math.max(); // -Infinity (nếu không truyền gì), NaN
let arr = [1, 3, 2, 10];
Math.max(...arr); // 10
Math.max(1, "abc"); // NaN
console.log(`Min: ${Math.min(1, 2, 3)}`);

//Math.pow()
Math.pow(2, 3); // 8  (2^3)
Math.pow(5, 2); // 25 (5^2)
Math.pow(9, 0.5); // 3  (căn bậc hai của 9)
Math.pow(4, -1); // 0.25 (1/4)

//isNaN(value)
isNaN(NaN); // true
isNaN("abc"); // true  (vì 'abc' → NaN)
isNaN(undefined); // true  (undefined → NaN)
isNaN("123"); // false (vì '123' → 123)
isNaN(123); // false

//Number.isNaN(value)
Number.isNaN(NaN); // true
Number.isNaN("abc"); // false (vì đây là string, không phải NaN)
Number.isNaN(undefined); // false
Number.isNaN(123); // false
