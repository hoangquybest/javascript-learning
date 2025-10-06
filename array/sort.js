/* Array.prototype.sort() — tất tần tật (nhưng rõ ràng)

sort() là phương thức sắp xếp mảng trong JavaScript. Nó rất hữu dụng nhưng cũng dễ gây bug nếu hiểu sai — mình sẽ nêu từ cơ bản tới nâng cao, kèm ví dụ và những “bẫy” thường gặp.

1. Cú pháp cơ bản
arr.sort([compareFunction])


compareFunction là hàm tùy chọn: (a, b) => /* negative | 0 | positive */ ///*/////

/* 
Trả về: chính cùng mảng arr (đã bị mutate).

2. Hành vi mặc định (không truyền compareFunction)

Nếu không truyền comparator, sort() chuyển mọi phần tử thành chuỗi (String(element)) rồi so sánh theo thứ tự Unicode code point (tức là so sánh chuỗi lexicographically).

Ví dụ gây lú:

[1, 2, 10].sort(); // ["1","10","2"] → kết quả: [1, 10, 2]


→ Vì "10" < "2" theo so sánh chuỗi.

Kết luận: luôn truyền comparator nếu bạn muốn sắp số học.

3. compareFunction — cách dùng đúng

Hàm so sánh phải trả về:

< 0 nếu a nên đứng trước b

0 nếu a và b được coi là bằng nhau (không hoán đổi)

> 0 nếu a nên đứng sau b

Ví dụ sắp tăng dần số:

arr.sort((a, b) => a - b);


Sắp giảm dần:

arr.sort((a, b) => b - a);


Chú ý: KHÔNG dùng comparator trả true/false (ví dụ (a,b) => a < b) vì true/false sẽ bị ép kiểu số (1/0) và dẫn tới kết quả không đúng.

4. Sắp chuỗi (locale-aware)

Để sắp xếp theo locale (ví dụ tiếng Việt, bỏ dấu, số trong chuỗi đúng thứ tự), dùng localeCompare hoặc Intl.Collator:

// simple
arr.sort((a,b) => a.localeCompare(b, 'vi', { sensitivity: 'base', numeric: true }));

// recommended: reuse collator for performance
const collator = new Intl.Collator('vi', { sensitivity: 'base', numeric: true });
arr.sort(collator.compare);


numeric: true giúp "2" < "10" đúng như số.

5. Sắp mảng đối tượng (sort by property)
const users = [{name:'A', age:30}, {name:'B', age:25}];
users.sort((x,y) => x.age - y.age);


Đa cấp (primary, secondary):

users.sort((a,b) => {
  const r = a.age - b.age;
  return r !== 0 ? r : a.name.localeCompare(b.name);
});

6. Mutate vs immutable

sort() thay đổi mảng gốc. Nếu bạn cần giữ bản gốc, clone trước:

const sorted = [...arr].sort((a,b)=>a-b);

7. Tính ổn định (stability)

Từ ES2019, Array.prototype.sort được chuẩn hóa là stable (những phần tử coi là “bằng nhau” bởi comparator sẽ giữ thứ tự ban đầu).

Trước ES2019 một số engine có thể không ổn định. Với engine hiện đại (V8, SpiderMonkey, JavaScriptCore) ngày nay thường là stable.

(Ví dụ: nếu compare(a,b) === 0 thì a trước b giữ nguyên thứ tự ban đầu.)

8. Phức tạp thuật toán / hiệu năng

Thời gian thường là O(n log n) trung bình. Thuật toán thực tế là do engine quyết định (timsort/merge/quick variant...), nhưng bạn nên coi sort() là O(n log n).

sort() đổi chỗ phần tử nên gây chi phí memory/shift; dùng nó với mảng lớn nhiều lần trong loop có thể tốn.

9. Edge cases & traps (những cái hay gây lỗi)

Không truyền comparator cho số → sắp chuỗi → sai thứ tự số.

Comparator không nhất quán (ví dụ phụ thuộc trạng thái ngoài) → kết quả không xác định, có thể gây crash logic.

Mutating trong vòng lặp: nếu bạn dùng splice/sort trong khi lặp, lưu ý chỉ số thay đổi.

NaN / undefined / null / object: khi ép kiểu có thể thành NaN hoặc "[object Object]". Hãy xử lý rõ ràng:

arr.sort((a,b) => {
  if (a == null) return 1; // null/undefined cuối
  if (b == null) return -1;
  return a - b;
});


Không dùng sort(() => Math.random() - 0.5) để shuffle, vì phân phối lệch. Dùng Fisher–Yates để shuffle.

10. Một số ví dụ tổng hợp
Sắp số tăng dần (an toàn):
const nums = [10, 2, 3];
const sortedNums = [...nums].sort((a,b) => a - b); // [2,3,10]

Sắp string ignore case:
arr.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

Sắp object theo chuỗi có accent (tiếng Việt):
const collator = new Intl.Collator('vi', { sensitivity: 'base' });
users.sort((a,b) => collator.compare(a.name, b.name));

Sắp giữ những giá trị null/undefined cuối:
arr.sort((a,b) => {
  if (a == null && b == null) return 0;
  if (a == null) return 1; // a sau
  if (b == null) return -1; // b sau
  return a - b;
});

11. sort() trên array-like

Bạn có thể dùng Array.prototype.sort.call(nodeList, cmp) nếu cần sắp NodeList / arguments (nhưng thông dụng là chuyển sang array: Array.from(nodeList).sort(...)).

12. Kiểm tra tính ổn định (quick demo)
const items = [{k:1, id:'a'}, {k:1, id:'b'}, {k:0, id:'c'}];
items.sort((x,y) => x.k - y.k);
// Với stable sort, among the two k===1 items, 'a' vẫn trước 'b'.

13. Tóm tắt ngắn

sort() mutates mảng, trả về mảng đã sắp.

Mặc định sắp theo chuỗi.

Để sắp số, truyền comparator (a,b)=>a-b.

Dùng localeCompare / Intl.Collator để sắp chuỗi chuẩn theo locale.

Tránh comparator trả boolean.

ES2019 → sort ổn định; complexity thường O(n log n).

Không dùng sort(() => Math.random()-0.5) để shuffle. */

// Làm thay đổi mảng gốc
const arr = [1, 777, 2, 555, 999, 100, -5];
arr.sort((a, b) => a - b);
console.log(arr);
arr.sort((a, b) => b - a);
console.log(arr);
