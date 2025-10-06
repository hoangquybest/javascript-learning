// Mảng

// ************************************************************************************
// Có 2 cách tạo mảng
// array literal
const students1 = [];

// array constructor
const students = new Array(); // global object

// ************************************************************************************
// ví dụ về mảng
// Mảng phức tạp [0, false, undefined, null, "me", ["me", false, 1200, []]]
// Mảng đơn giản [false, 0 , undefined]
// [1,2,3,4,5] ["a", "b", "c"]
// [] empty array -> mảng rỗng

// ************************************************************************************
// index
// length: độ dài của mảng
const students2 = ["Tuan", "Nam", "Hoai"];
console.log(students2.length); // 3
console.log(students2[5]); // "undefined"

// Phương thức hay dùng của mảng
// length

// ************************************************************************************
// reverse - Đảo ngược các giá trị của mảng
// Tại sao khi gõ reverse nó lại không thêm () hay các method nói chung trong VSCode IntelliSense
// Vì const fn = arr.reverse; // lấy reference của hàm, chưa gọi, muốn gọi thì phải tự thêm ()
// reverse() không tạo ra mảng mới. - mutable thay đổi mảng ban đầu nên space complexity là O(1) vì không tạo mảng mới chỉ swap trên mảng cũ
// Time complexity: O(n/2) vì chỉ cần duyệt 1 nửa mảng để swap đầu với cuối, thứ 2 với thứ 2 từ cuối...
// Nó đảo ngược các phần tử ngay trên mảng ban đầu và trả về cùng chính mảng đó.
console.log(students2.reverse()); // tuy trên console tại thời điểm log là 3 nhưng expand ra thì nó đã là 4 phần tử rồi
students2.push("Em");
console.log(students2);

// ************************************************************************************
// join - nối các phần tử trong mảng thành chuỗi
// join() nối các phần tử trong mảng thành chuỗi, ngăn cách bằng dấu phẩy (mặc định).
// Với từng phần tử:
// Nếu là null hoặc undefined → nó coi như chuỗi rỗng "".
// Nếu là boolean (true / false) → nó sẽ được ép thành "true" hoặc "false".
// Các giá trị khác → gọi toString().
const students3 = [null, false, undefined];
console.log(students3.join()); // ,
console.log([null, 2, undefined, 3].join("-"));
// output: "-2--3"
console.log([1, null, 2].join(","));
// output: "1,,2"

// ************************************************************************************
// includes
console.log(students3.includes(undefined)); // true
console.log(students3.includes(false)); // true

// ************************************************************************************
// indexOf - Trả về vị trí của phần tử tìm thấy đầu tiên
// array.indexOf(searchElement, fromIndex);
// searchElement: giá trị muốn tìm.
// fromIndex (tùy chọn): vị trí bắt đầu tìm (mặc định là 0).
// 👉 Trả về:
// Index đầu tiên tìm thấy.
// -1 nếu không tồn tại.

console.log(students3.indexOf()); // Không truyền gì vào thì mặc định đang tìm kiếm undefined thì giá trị trả về lúc này là 2
const numbers = [1, 2, 3, 2, 4];
console.log(numbers.indexOf(2)); // 1 (gặp số 2 đầu tiên ở vị trí 1)
console.log(numbers.indexOf(2, 2)); // 3 (bắt đầu tìm từ index 2)
console.log(numbers.indexOf(5)); // -1 (không có 5 trong mảng)

const arr = [{}, [], 3, null, undefined, [2, 3], { cls: "hhhh" }];
const isEven = (num) => console.log(num % 2 === 0);
console.log(arr.forEach(isEven));

// {} → không convert được sang số → NaN % 2 → false
// {} → không convert được sang số → NaN % 2 → false
// {} → không convert được sang số → NaN % 2 → false
// {} → không convert được sang số → NaN % 2 → false
// {} → không convert được sang số → NaN % 2 → false
// [] → khi ép về số: Number([]) = 0 → 0 % 2 === 0 → true
// 3 → 3 % 2 = 1 → false
// null → Number(null) = 0 → 0 % 2 === 0 → true
// undefined → Number(undefined) = NaN → false
// [2, 3] → Number([2,3]) = NaN → false
// { cls: "hhhh" } → NaN % 2 → false

// ************************************************************************************
// lastIndexOf() -> Trả về vị trí của phần tử tìm thấy cuối cùng
console.log(arr.lastIndexOf(undefined)); // 4

// ************************************************************************************
// push - Thêm phần tử vào cuối mảng
console.log(arr.push("myName")); // 8 - Trả về số lượng phần tử sau khi push

// ************************************************************************************
// unshift - thêm phần tử vào đầu mảng
console.log(arr.unshift("Trang")); // 9 - trả về số lượng phần tử sau khi unshift

// ************************************************************************************
// pop - dùng để xoá phần tử cuối cùng trong mảng
console.log(arr.pop()); // trả về phần tử bị xoá

// ************************************************************************************
// shift - xoá phần tử đầu tiên trong mảng
console.log(arr.shift()); // trả về phần tử bị xoá

// ************************************************************************************
/* Một số chú ý
- length có thể thay đổi mảng ban đầu VD: arr.length = 2 sẽ cắt ngắn mảng lại
- Không thay đổi mảng ban đầu: toString(), at(), join(), concat(), flat(), slice(), toSplice()
- Không thay đổi mảng ban đầu: pop(), push(), shift(), unshift(), delete arr[i] (xoá phần tử nhưng không cập nhật lại mảng gốc), popyWithin(), splice() */
