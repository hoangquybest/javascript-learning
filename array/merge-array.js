// Có khoảng 2 cách gộp mảng
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Cách 1: Sử dụng concat()
const mergedArray1 = array1.concat(array2);
console.log(mergedArray1); // [1, 2, 3, 4, 5, 6]
console.log(mergedArray1 === array1); // false
console.log(mergedArray1 === array2); // false
// Vì mergedArray1 là mảng mới hoàn toàn
console.log("-----");

// Cách 2: Sử dụng spread operator (...)
const mergedArray2 = [...array1, ...array2];
console.log(mergedArray2); // [1, 2, 3, 4, 5, 6]
console.log(mergedArray2 === array1); // false
console.log(mergedArray2 === array2); // false
// Vì mergedArray2 là mảng mới hoàn toàn
console.log("-----");
// Trường hợp gộp nhiều mảng
const array3 = [7, 8, 9];
const mergedArray3 = [...array1, ...array2, ...array3];
console.log(mergedArray3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergedArray3 === array1); // false
