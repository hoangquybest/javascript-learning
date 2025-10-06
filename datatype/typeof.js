console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(null));

console.log(typeof null); //object
console.log(typeof undefined); // undefined
console.log(typeof true);
console.log(typeof "");
console.log(typeof 2);

// Khi bạn viết const myArray = new Array();
// hoặc đơn giản là const myArray = [];, bạn đang ngầm gọi hàm constructor Array() này.
console.log(typeof Array); //function vì là built-in constructor

console.log(typeof Object); // function
console.log(typeof []); // object
console.log(typeof {}); // object
