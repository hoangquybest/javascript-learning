// được dùng để “rút gọn” (reduce) một mảng về một giá trị duy nhất — có thể là số, chuỗi, object, mảng mới, hoặc bất kỳ kiểu nào tùy bạn định nghĩa.
// array.reduce(callback, initialValue)
// callback là hàm bạn truyền vào, được gọi cho từng phần tử trong mảng.
// initialValue là giá trị khởi tạo của phép tính (tùy chọn).
// reduce sẽ duyệt từng phần tử của mảng, và tích lũy kết quả vào một biến gọi là accumulator.

// array.reduce((accumulator, currentValue, currentIndex, array) => {
//     // logic xử lý
//   }, initialValue);

// Nếu mảng rỗng và không truyền initialValue, JS sẽ throw lỗi TypeError: Reduce of empty array with no initial value
// Để an toàn luôn truyền initialValue

// tính tổng giá tiền
const cart = [
  { item: "Book", price: 100 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 250 },
];

const total = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(total); // 👉 370

// Đếm số lần xuất hiện của từng phần tử
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// 👉 { apple: 3, banana: 2, orange: 1 }

// gộp nhiều mảng con thành mảng lớn - tương đương với arr.flat()
const arr = [[1, 2], [3, 4], [5]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // 👉 [1, 2, 3, 4, 5]

// chuyển mảng thành object
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 5, name: "Charlie" },
];
const userObj = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
console.log(userObj);
