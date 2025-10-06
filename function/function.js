// function (hàm)
// khai báo function
// cú pháp(Syntax): function functionName(parameters){
// your code here
// }
// Nếu không có return trong function thì kết quả trả về là undefined

// Tính tổng a và b
function sum(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    throw new Error("Cả hai giá trị phải là số hợp lệ");
  }

  return numA + numB;
}

// Dùng
try {
  console.log(sum("3", 5)); // 8
  console.log(sum("", 1)); // 1, chú ý case này vì Number("") = 1
  console.log(sum(true, 1)); // 2, chú ý case này vì Number(true) = 2
  console.log(sum("abc", 5)); // Error
} catch (err) {
  alert(err.message);
}

// gán giá trị mặc định cho parameter
function sum2(a, b = 1) {
  return a + b;
}

console.log(sum2(2));
// console.log(sum2()); // NaN

// Lưu function vào 1 biến và gọi sau
function add(a, b) {
  return a + b;
}

// gán function cho biến sum3 nhưng chưa được gọi
const sum3 = add;

// Tính trung bình
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}

let result = average(200, 300, sum3);
console.log(result);

// anonymous function (function expression) -> Không bị hoisting
const logName = function () {
  console.log("My name");
};

logName();

// IIFE -> immediately invoked function execution
(function () {
  console.log("This is IIFE function");
})();

// Scope
// Global scope, function scope
let myName = "My Name"; // global scope
function logMyName() {
  let myName2 = "My name 2"; // function scope
}

let message1;
let message2;
// block scope
if (2 > 1) {
  let message = "Hello"; // block scope -> bên ngoài block không gọi được
  let message1 = "message 1";
  console.log(message1);
  message2 = "message 2";
  console.log(message2);
  // global scope
  // Hoisted
  var message3 = "Message 3"; // Bên ngoài block vẫn gọi được
}
console.log(message1); // undefined
console.log(message2); // message 2
console.log(message3); // message 3

// Closure
// Là một hàm ghi nhớ môi trường (scope) mà nó được tạo ra, ngay cả khi hàm đó được gọi ngoài phạm vi gốc.
// Nói cách khác: Hàm con có thể truy cập các biến của hàm cha sau khi hàm cha kết thúc
// Khi bạn khai báo một hàm bên trong một hàm khác, hàm bên trong sẽ đóng gói (close over) các biến của hàm ngoài.
// Khi hàm ngoài return ra hàm trong đó, môi trường chứa các biến vẫn được giữ lại trong bộ nhớ.
function outer() {
  let counter = 0; // biến nằm trong outer

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner; // return hàm inner
}

const fn = outer(); // outer() chạy 1 lần, trả về inner
fn(); // 1
fn(); // 2
fn(); // 3
// Ứng dụng thực tế
// Tạo biến private (ẩn dữ liệu, giống OOP private property):
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    get() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.get()); // 1
// Callback và event handler: Closure giúp bạn nhớ trạng thái khi chạy async.
// Memoization / caching: Giữ dữ liệu trong scope để tối ưu hiệu năng.

// Điểm mạnh của closure
// Bảo mật dữ liệu: không ai bên ngoài truy cập trực tiếp biến bên trong.
// Giữ trạng thái: hữu ích cho counter, cache, config…

// Điểm cần lưu ý
// Memory leak: Nếu lạm dụng closure giữ biến lớn → khó giải phóng bộ nhớ.
// Đọc code phức tạp: Cần đặt tên biến rõ ràng để tránh nhầm.

// Lexical scoping
// Global Scope
//  ├─ x
//  └─ outer()
//      ├─ y
//      └─ inner()  <-- nhớ x và y vì lexical scope
// Khi bạn tạo hàm bên trong hàm khác, JS ghi nhớ scope nơi nó định nghĩa, dù bạn gọi nó ở đâu.
// Điều này cho phép hàm con truy cập biến của hàm ngoài ngay cả khi hàm ngoài đã kết thúc.

function sayHello3(message) {
  return function hiYourName(name) {
    console.log(`${message} ${name}`);
  };
}
let hello = sayHello3("Welcome to my"); // Trả về hàm hiYourName và message đã được chốt = "Welcome to my" bởi closure và gán cho biến hello
hello("home"); // Gọi hàm này thì name = "home" -> Thực thi console.log(${message} ${name});

// Một function bth khi chạy xong chúng ta sẽ ko còn truy xuất các biến bên trong được nữa, tuy nhiên với closure thì nó vẫn có thể ghi nhớ và truy xuất được
