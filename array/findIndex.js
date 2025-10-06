// Trả về vị trí của của phần tử đầu tiên tìm thấy
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = number.findIndex((num) => num > 5);
console.log(result); // 5 (vị trí của số 6 trong mảng)
// Nó sẽ trả về -1 nếu không tìm thấy
const result2 = number.findIndex((num) => num > 20);
console.log(result2); // -1
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const userIndex = users.findIndex((user) => user.id === 2);
console.log(userIndex); // 1 (vị trí của Bob trong mảng)
const userIndex2 = users.findIndex((user) => user.name === "David");
console.log(userIndex2); // -1 (không tìm thấy)
// Tìm vị trí của phần tử có chuỗi dài nhất
const fruits = ["apple", "banana", "cherry", "date"];
const longestFruitIndex = fruits.findIndex(
  (fruit, index, arr) => fruit.length === Math.max(...arr.map((f) => f.length)) // O(n^2)
);

// Nhớ hàm
Max.max(...arr);

console.log(longestFruitIndex); // 1 (vị trí của "banana")
// Tìm vị trí của phần tử đầu tiên là số chẵn
const mixedNumbers = [1, 3, 5, 6, 7, 8];
const firstEvenIndex = mixedNumbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // 3 (vị trí của số 6)
// Tìm vị trí của phần tử đầu tiên lớn hơn giá trị trung bình của mảng
const values = [10, 20, 30, 40, 50];
const average = values.reduce((sum, val) => sum + val, 0) / values.length;
const firstAboveAverageIndex = values.findIndex((val) => val > average);
console.log(firstAboveAverageIndex); // 3 (vị trí của số 40)
// Tìm vị trí của phần tử đầu tiên không phải là số
const mixedArray = [1, 2, "three", 4, null, 5];
const firstNonNumberIndex = mixedArray.findIndex(
  (item) => typeof item !== "number"
);
console.log(firstNonNumberIndex); // 2 (vị trí của "three")
// Tìm vị trí của phần tử đầu tiên có thuộc tính cụ thể trong mảng đối tượng
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone", onSale: true },
  { id: 3, name: "Tablet" },
];
const firstOnSaleIndex = products.findIndex((product) => product.onSale);
console.log(firstOnSaleIndex); // 1 (vị trí của "Phone")
