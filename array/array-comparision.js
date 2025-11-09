// JSON: Javascript Object Notation

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [3, 2, 1];

// JSON.stringify(value): convert giá trị sang - vd JSON.stringify(arr1) = "[1,2,3]"
// toString() - Không sử dụng được cho object và array vì vd [1,2,3].toString() = "1,2,3", [].toString() = ""
// JSON.parse - vd JSON.parse("[1,2,3]") = [1,2,3]

console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true
console.log(JSON.stringify(arr2) === JSON.stringify(arr3)); // false
