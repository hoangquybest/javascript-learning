// Nó sẽ trả về phần tử đầu tiên tìm thấy trong mảng
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = number.find((num) => num > 5);
console.log(result); // 6
// Nó sẽ trả về undefined nếu không tìm thấy
const result2 = number.find((num) => num > 20);
console.log(result2); // undefined
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const user = users.find((user) => user.id === 2);
console.log(user); // { id: 2, name: 'Bob' }
const user2 = users.find((user) => user.name === "David");
console.log(user2); // undefined
