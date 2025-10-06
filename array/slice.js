// ************************************************************************************
// slice() - Tạo ra một mảng copy của mảng ban đầu
const animals = ["tiger", "lion", "turtle", "elephant", "horse"];

console.log(animals.slice()); // (5) ['tiger', 'lion', 'turtle', 'elephant', 'horse']
console.log(animals); // (5) ['tiger', 'lion', 'turtle', 'elephant', 'horse']

// slice(startIndex) - Trả về mảng từ vị trí startIndex
console.log(animals.slice(2)); //(3) ['turtle', 'elephant', 'horse']
console.log(animals.slice(10)); // []
console.log(Number(animals.slice(10))); // 0

console.log(animals.slice(2, 10)); // (3) ['turtle', 'elephant', 'horse']
console.log(animals.slice(10, 20)); // []

console.log(animals.slice(-5)); // (5) ['tiger', 'lion', 'turtle', 'elephant', 'horse']
