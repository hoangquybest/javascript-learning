// Trả về một mảng mới chứa các phần tử thỏa điều kiện (predicate) mà bạn cung cấp.
// array.filter(callback(element, index, array), thisArg)
// callback: hàm được gọi cho mỗi phần tử trong mảng.

// element: phần tử hiện tại đang được xử lý trong mảng.
// index (tùy chọn): chỉ số của phần tử hiện tại.
// array (tùy chọn): mảng gốc mà filter được gọi trên.
// thisArg (tùy chọn): giá trị để sử dụng làm this khi thực thi callback.
// Trả về: một mảng mới với các phần tử thỏa điều kiện. Nếu không có phần tử nào thỏa, trả về mảng rỗng [].
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]
const greaterThanThree = numbers.filter((num) => num > 3);
console.log(greaterThanThree); // [4, 5, 6]
const lessThanThree = numbers.filter((num) => num < 3);
console.log(lessThanThree); // [1, 2]
const allNumbers = numbers.filter((num) => true);
console.log(allNumbers); // [1, 2, 3, 4, 5, 6]
const noNumbers = numbers.filter((num) => false);
console.log(noNumbers); // []
// Lọc các số nguyên tố
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers); // [2, 3, 5]

// Lọc object theo điều kiện:
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Carol", active: true },
];

const activeUsers = users.filter((u) => u.active);

console.log(activeUsers);
// [ { name: 'Alice', active: true }, { name: 'Carol', active: true } ]

// Lọc theo từ khóa (search):
const products = ["apple", "banana", "pear", "pineapple"];
const search = "app";

const result = products.filter((p) => p.includes(search));

console.log(result); // ['apple', 'pineapple']

/* ⚙️ 5️⃣ Độ phức tạp

Thời gian: O(n) — phải duyệt qua toàn bộ mảng.

Không gian: O(k) — k là số phần tử thỏa điều kiện (mảng mới).

👉 Không có cách “tối ưu” đáng kể nếu bạn cần duyệt toàn bộ mảng để lọc — nhưng có thể kết hợp với cấu trúc dữ liệu khác (Set, Map) nếu bạn cần kiểm tra membership nhiều lần. */
