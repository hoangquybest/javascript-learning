// splice() - Xoá phần tử trong mảng hoặc thay thế phần tử trong mảng, làm thay đổi mảng gốc

// *****************************************************************************************
/* array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
start (bắt buộc): vị trí bắt đầu thao tác (số nguyên). Nếu âm → được tính từ cuối: start = length + start. Nếu start lớn hơn length → nó được xử lý như start = length (tức là thao tác ở cuối).

deleteCount (tùy chọn): số phần tử sẽ bị xóa bắt từ start. Nếu bỏ qua → xóa tất cả phần tử từ start tới cuối mảng. Nếu deleteCount <= 0 → không xóa gì.

item1, item2, ... (tùy chọn): phần tử chèn vào tại vị trí start.

Trả về: một mảng gồm các phần tử đã bị xóa (có thể là [] nếu không xóa phần tử nào). */
// *****************************************************************************************

let a = [1, 2, 3, 4, 5];

// Xóa 1 phần tử ở index 2
a.splice(2, 1); // trả về [3]
console.log(a); // [1,2,4,5]

// Chèn mà không xóa
a.splice(2, 0, 99);
console.log(a); // [1,2,99,4,5]

// Thay thế (xóa 2 phần tử bắt đầu từ index 1, chèn 7,8)
a.splice(1, 2, 7, 8);
console.log(a); // [1,7,8,4,5]

// deleteCount bị bỏ qua => xóa tới cuối
a.splice(2);
// xóa từ index 2 tới cuối, trả về phần đã xóa

// *****************************************************************************************
/* Một số quy tắc & edge-cases quan trọng

start được ép sang số nguyên (truncation). Nếu là NaN → coi như 0.

start âm → start = Math.max(len + start, 0). Ví dụ splice(-1,1) xóa phần tử cuối.

deleteCount âm → coi như 0 (không xóa).

Nếu start > length và bạn chèn phần tử (deleteCount = 0, có items), các item sẽ được append vào cuối mảng.

splice() luôn mutate (thay đổi) mảng gốc và cập nhật length.

splice() trả về mảng các phần tử đã bị xóa. Nếu không xóa gì -> trả về []. */
// *****************************************************************************************

// *****************************************************************************************
/* So sánh splice() với slice() và delete

slice(start, end) → không mutate, trả về một bản sao của phần mảng.

delete arr[i] → không shift phần tử, chỉ để lại "hole" (sparse slot); arr.length không thay đổi.

splice() → xóa và shift các phần tử phía sau (index thay đổi). */
// *****************************************************************************************

// *****************************************************************************************
/* Khi nào dùng splice() (use-cases)

Xóa hoặc chèn một hoặc nhiều phần tử tại vị trí giữa mảng.

Thay thế một đoạn mảng.

Dọn sạch mảng: arr.splice(0) → xóa toàn bộ phần tử (array becomes []).

Lưu ý: để clear một array thường arr.length = 0 hiệu quả hơn. */
// *****************************************************************************************

// *****************************************************************************************
/* Khi nào dùng splice() (use-cases)

Xóa hoặc chèn một hoặc nhiều phần tử tại vị trí giữa mảng.

Thay thế một đoạn mảng.

Dọn sạch mảng: arr.splice(0) → xóa toàn bộ phần tử (array becomes []).

Lưu ý: để clear một array thường arr.length = 0 hiệu quả hơn. */
// *****************************************************************************************

let arr = [{}, [], 3, null, undefined, [2, 3], { cls: "hhhh" }];

// Xóa phần tử tại index 2 (số 3)
const removed = arr.splice(2, 1);
console.log(removed); // [3]
console.log(arr); // [{}, [], null, undefined, [2,3], {cls:"hhhh"}]

// Chèn 'X' vào index 1
arr.splice(1, 0, "X");
// arr = [{}, 'X', [], null, undefined, [2,3], {cls:"hhhh"}]

// Thay thế index 0..1 bằng 'A', 'B'
arr.splice(0, 2, "A", "B");
// arr = ['A','B', [], null, undefined, [2,3], {cls:"hhhh"}]

// *****************************************************************************************
/* Những lỗi/trap hay gặp

Mutating during iteration: nếu bạn dùng for (let i=0; i< arr.length; i++) { if(cond) arr.splice(i,1); } thì i tăng và phần tử kế tiếp sẽ bị skip. Giải pháp: lặp ngược (for (let i = arr.length-1; i>=0; i--)) hoặc dùng filter.

React / immutable patterns: trong React, đừng mutate state trực tiếp bằng splice(); phải tạo bản copy (const copy = [...arr]; copy.splice(...); setState(copy)).

Sparse arrays: splice sẽ xóa phần tử và giữ mảng "đặc" (no holes) vì nó shift phần tử. Nhưng tương tác với sparse arrays có thể gây nhầm lẫn.

Performance: splice phải shift nhiều phần tử → O(n) cost; không dùng nó trong hot-loop với mảng lớn. */
// *****************************************************************************************

// *****************************************************************************************
/* splice() và array-like objects

splice có thể được gọi trên các đối tượng "array-like" (như arguments, NodeList, …) bằng .call:

function demo() {
  Array.prototype.splice.call(arguments, 1, 1); // loại bỏ tham số thứ hai
}
demo(1,2,3); // arguments bây giờ giống [1,3] */
// *****************************************************************************************

// *****************************************************************************************
/* Các thao tác thường dùng (cheat sheet)

Xóa 1 phần tử: arr.splice(index, 1);

Chèn tại index: arr.splice(index, 0, newItem);

Thay thế 2 phần tử từ index: arr.splice(index, 2, a, b);

Xóa toàn bộ: arr.splice(0); // arr => [] (hoặc arr.length = 0)

Lấy mảng mới không mutate: const newArr = [...arr.slice(0,i), newItem, ...arr.slice(i)];

Remove by value (first occurrence):

const idx = arr.indexOf(value);
if (idx !== -1) arr.splice(idx, 1);

Khi nên dùng filter/map thay vì splice

Muốn không mutate và giữ code "functional": dùng filter/map để tạo mảng mới.

Loại bỏ tất cả phần tử thỏa điều kiện: arr = arr.filter(x => !cond(x));

Tư vấn/Best practices (senior tips)

Biết rằng splice() mutate — nếu đang ở trong môi trường cần immutable (React state, Redux) hãy clone trước.

Tránh dùng splice() trong vòng lặp tiến (forward loop) khi bạn xóa phần tử — lặp ngược thay vì lặp xuôi.

Dùng slice() + spread khi cần bản sao.

Kiểm tra deleteCount và start để tránh xóa nhầm (ví dụ check index !== -1 trước khi splice).

Nếu performance quan trọng với mảng lớn, cân nhắc cấu trúc dữ liệu khác (linked list, deque, hoặc giải pháp batching).

Tóm tắt ngắn gọn

splice(start, deleteCount, ...items) → thay đổi mảng gốc, trả về mảng các phần tử đã xóa.

Dùng để xóa / chèn / thay thế ở giữa mảng.

Làm shift các phần tử phía sau → có chi phí O(n).

Nếu cần immutable → dùng slice, filter, spread operators. */
