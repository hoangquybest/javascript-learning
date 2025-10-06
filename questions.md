## Tại sao nên nhúng JS ở cuối body?

✅ Tăng tốc độ hiển thị trang – HTML và CSS được load/render trước, JS không chặn việc hiển thị.
✅ DOM có sẵn khi JS chạy – thao tác với phần tử không bị lỗi null.
✅ Giảm độ phức tạp – không cần chờ DOMContentLoaded hay window.onload.
✅ Cách truyền thống, dễ hiểu – tương đương với việc dùng defer trong <head>.

## console.log là gì? Tại sao lại dùng console.log?

- Dùng để debug và kết quả được in ra trên chrome

## Biến - Variables

- camelCase
- Không được bắt đầu bằng SỐ hoặc có bao gồm giấu - hoặc ký tự đặc biệt ngoài các ký tự(\_lll , $)
- Không được sử dụng các keyword: new, name,..

## Khai báo biến với const và let - Declare variables

- const: hằng số thay đổi sẽ lỗi
- let có thể thay đổi được

## typeof là toán tử trong JavaScript, dùng để kiểm tra kiểu dữ liệu (data type) của một biến hoặc giá trị.

- Luôn trả về 1 string để mô tả kiểu dữ liệu

## Hoisting cơ bản

- Hoisting trong JavaScript là cơ chế mà trình thông dịch (engine) sẽ “đưa phần khai báo” (declaration) của biến và hàm lên đầu phạm vi (scope) trước khi code được thực thi.
- Nói ngắn: Khai báo được “kéo lên” trước khi thực thi.
- const và let ko bị hoisting
- var sẽ bị hoisting

## Data Types: Number, String, Boolean, Undefined, Null

## String - Các hàm hay sử dụng với String

- index
- length
- split
- toLowerCase
- toUpperCase
- startWith
- endsWith
- includes
- indexOf
- replace
- repeat
- slice(start, end) // lấy từ vị trí start đến vị trí end - 1
- slice(start) // lấy từ vị trí start đến hết
- trim
- charAt
- substr(start index, length) // Lấy ra một phần của chuỗi - lấy từ vị trí start index, length: độ dài cần lấy
- substring(start index, end index) // Lấy ra các ký tự của chuỗi - lấy từ vị trí start index đến end index
- Sử dụng nhiều phương thức chung với nhau

## Number

- số nguyên 1 3 4 888 999
- số thập phân: 3,4 6,7 -> 3.4 6.7
- "4.8"

- Math.abs(value) -> giá trị tuyệt đối
- Math.floor(value) -> Làm tròn xuống
- Math.ceil(value) -> Làm tròn lên
- Math.round(value) -> Làm tròn gần nhất
- Math.random() -> Trả về số thực từ 0 đến nhỏ hơn 1
- Math.random() \* n -> 0 <= x <= n
- Math.max(value1, value2, ..., valueN) -> Trả về số lớn nhất.
- Math.max -> không nhận trực tiếp mảng, nhưng ta có thể dùng spread (...) để truyền phần tử mảng vào
- Math.pow(2, 3) = 2 \*\* 3 -> Là kết quả của 2 luỹ thừa 3 -> kết quả là 8

- parseFloat((1/3).toFixed(2)) -> Làm tròn số thành chuỗi có 2 chữ số thập phân và sau đó parse chuỗi này sang kiểu số thực

- isNaN(value) -> hàm global - not a number

* Đây là hàm toàn cục
* Cơ chế: trước tiên cố gắng ép value sang số, sau đó kiểm tra có phải NaN không.
* Tức là isNaN trả về true không chỉ cho NaN mà còn cho mọi thứ ép ra NaN.

- Number.isNaN -> phương thức của Number

* Không ép kiểu.
* Chỉ trả về true khi value thực sự là NaN.
* Tức là Number.isNaN strict hơn, không “lẫn lộn” với các kiểu khác.

## Other data types

## undefined

- Khai báo nhưng không gán giá trị (chú ý với let thì có thể làm như vậy nhưng const thì khai báo thì phải gán giá trị liền)
- Truy cập property không tồn tại
- Hàm không trả về giá trị
- Tham số không truyền vào
- Biến chưa gán hoặc không tồn tại (vd let x;)

## null

- Giá trị “trống” có chủ đích do lập trình viên gán (vd: let x = null)

## Boolean -> true / false

- true / false
- falsy values và truthy values
- falsy values: "", 0, false, undefined, null, NaN (tổng cộng 6 cái)
- truthy values: "abc", 1, true, 100, 1000

## Chuyển đổi kiểu dữ liệu

- Number(value) -> xem trong file part3.js
- String(value) -> xem trong file part3.js
- Boolean(value) -> trả về true/false dựa vào falsy hay truthy

- Khi xem trên tab Console của browser -> màu xám xám là string màu xanh xanh là số

## type coercion

- Toán tử: + - \* /

## Toán tử so sánh > < >= <=

## Toán tử logic cơ bản && || !

## == loose equality và === strict equality

## ==

- Ép kiểu tự động trước khi so sánh.
- Nếu hai giá trị khác kiểu → JavaScript sẽ cố chuyển về cùng kiểu → sau đó so sánh.
- Dễ gây bug vì bạn có thể không lường trước được quy tắc ép kiểu.
- undefined chỉ lỏng lẻo bằng với null và chính nó, không bằng với bất kỳ số nào.

## ===

- Không ép kiểu.
- Hai giá trị phải cùng kiểu và cùng giá trị mới true.
- Luôn rõ ràng, an toàn hơn.

## Best practice

- Luôn dùng === và !== trong hầu hết trường hợp để tránh ép kiểu ngoài ý muốn.
- Chỉ dùng == khi bạn biết rõ quy tắc ép kiểu và muốn tận dụng nó (ví dụ check null và undefined cùng lúc).
  VD: let x = null;
  if (x == null) {
  // true cho cả null và undefined
  }

## Câu điều kiện if else

- if () {} else {}
- if () {} else if () {} else {}

## prompt, confirm, alert

- alert("Your website has been hacked");
- prompt("Vui lòng nhập tên của bạn", "");
- prompt("Vui lòng nhập tên của bạn", "");

## switch case

## Một số chú ý về prompt

- nếu như bấm huỷ thì nó sẽ truyền vào null, ngoài ra nhập bất kỳ cái gì nó cũng truyền vào string
  -> Khi cần convert sang số Number(null) = 0 nên chú ý case này
  -> Khi cần convert sang số Number("") = 0 nên chú ý case này
  -> Tất cả các string nếu string đó không phải là string số thì Number(string) = NaN

- Không cần quan tâm đến 3 case sau

* Number(undefined) = NaN
* Number(true) = 1
* Number(false) = 0

## Ternary Operator

- condition ? ... : ....

## function

- Tại sao lại cần function (tái sử dụng, chia nhỏ đặt tên có ý nghĩa để mỗi function chịu 1 trách nhiệm để bảo trì, test)
- Nếu không có return trong function thì kết quả trả về là undefined
- Có thể gán giá trị mặc định cho parameter
- tạo function truyền vào parameter (tham số)
- invoke function truyền vào argument (đối số)
- Tại sao nên gán function vào biến

* Tránh hoisting
* callback
* ....

- Tham số truyền vào có thể là 1 function khác
- function declaration
- anonymous function (function expression) -> không bị hoisting
- IIFE -> immediately invoked function execution
- scope: Global scope, function scope
- block scope
- closure

## Arrow function : anonymous function

- ECMAScript
- Không bị hoist

## Date

- Nhớ là nếu sử dụng hàm getMonth thì luôn + 1 vì nó chạy từ 0
- setTimeout và setInterval

## JSON.stringify

## Predicate

- Predicate là một function nhưng chỉ trả về true, false dùng để check điều kiện nào đó

- Phân biệt một số cái sau

* map(callback): Callback transform (trả về giá trị mới)
* reduce(callback): Callback accumulator (tích luỹ giá trị)
* filter(predicate):
* find(predicate):
