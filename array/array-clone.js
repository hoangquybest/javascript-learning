// 2 cách clone mảng nên biết
const array1 = [1, 2, 3, 4, 5];

// Cách 1: Sử dụng spread operator (...)
const cloneArray1 = [...array1];
console.log(cloneArray1); // [1, 2, 3, 4, 5]
console.log(cloneArray1 === array1); // false
// Vì cloneArray1 và array1 là 2 mảng khác nhau trong bộ nhớ
cloneArray1.push(6);
console.log(cloneArray1); // [1, 2, 3, 4, 5, 6]
console.log(array1); // [1, 2, 3, 4, 5]
// array1 không bị ảnh hưởng
console.log("-----");

// Cách 2: Sử dụng slice()
const cloneArray2 = array1.slice();
console.log(cloneArray2); // [1, 2, 3, 4, 5]
console.log(cloneArray2 === array1); // false
cloneArray2.push(7);
console.log(cloneArray2); // [1, 2, 3, 4, 5, 7]
console.log(array1); // [1, 2, 3, 4, 5]
// array1 không bị ảnh hưởng
console.log("-----");
