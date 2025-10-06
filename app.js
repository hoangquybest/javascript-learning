console.log("hello world!");

// const and let
const number = 100;
console.log(number);
//number = 200; //app.js:6 Uncaught TypeError: Assignment to constant variable.

let otherNumber = 100;
console.log(otherNumber);
otherNumber = 200;
console.log(otherNumber);

// Hoisting
// console.log(hoisNumber); //Uncaught ReferenceError: Cannot access 'hoisNumber' before initialization
const hoisNumber = 100;

// Khi khai báo biến mà chưa gán giá trị
var a; // undefined
console.log(a);

console.log(a); // undefined // hoisting
var a = 5;
// Thực tế nó sẽ được chạy như bên dưới
var a;
console.log(a); // undefined
a = 5;
