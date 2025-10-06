## split('') trên chuỗi thì nó sẽ tương đương với [...spread] đều tách chuỗi thành mảng

1. split('')

- Mục đích chính: Chia (tách) một chuỗi thành một mảng các CHUỖI CON (chỉ có khoảng trắng " " mới là falsy, còn "0" vẫn là truthy) dựa trên một ký tự phân tách (delimiter) được cung cấp.
- Phạm vi: Chỉ áp dụng cho chuỗi (String).
- Cú pháp: string.split(delimiter)
- Trường hợp thành mảng ký tự: Cần cung cấp chuỗi rỗng ('') làm ký tự phân tách.
- Hành vi: Tách chuỗi dựa trên delimiter. Nếu delimiter là '', nó tách sau mỗi ký tự được mã hóa UTF-16, có thể gây ra vấn đề với các ký tự biểu tượng (emoji) hoặc ký tự Unicode phức tạp.

2. spread(...)

- Mục đích chính: Mở rộng (bung) một iterable (như mảng, chuỗi, Set) thành các phần tử riêng lẻ (ví dụ: trong mảng mới hoặc lời gọi hàm).
- Phạm vi: Áp dụng cho tất cả các iterables, bao gồm chuỗi (String), mảng (Array), Map, Set, v.v.
- Cú pháp: [...iterable]
- Trường hợp thành mảng ký tự: Khi áp dụng cho chuỗi, nó tự động bung chuỗi thành các phần tử riêng lẻ trong mảng mới.
- Hành vi: Sử dụng tính năng iterator của chuỗi, cho phép nó xử lý đúng cách các ký tự biểu tượng (emoji) hoặc các ký tự Unicode được tạo thành từ nhiều đơn vị mã hóa UTF-16 (ví dụ: chuỗi có codepoint lớn hơn U+FFFF).

## String concatenation (nối chuỗi) trong bài reverse string

- String concatenation (nối chuỗi): Trong JavaScript, chuỗi là bất biến (immutable), nên mỗi lần nối chuỗi (như reversed += str[i] hoặc char + acc) sẽ tạo ra một chuỗi mới. Điều này dẫn đến time complexity là O(n²) vì tổng chi phí sao chép là 1+2+3+...+n = n(n+1)/2. Tuy nhiên, về space complexity, chúng ta xét đến peak memory usage (bộ nhớ tối đa được sử dụng tại một thời điểm). Trong cả hai code, peak memory là O(n) vì các chuỗi trung gian có thể được thu hồi rác (garbage collection) và chỉ có một chuỗi kết quả được lưu cùng với các cấu trúc khác.

- So sánh với phương pháp tối ưu: Nếu dùng split("").reverse().join(""), space complexity vẫn là O(n) nhưng time complexity là O(n) vì không có nối chuỗi liên tục.

## Cách tính space complexity

1. Xác định kích thước đầu vào (n): Ví dụ, với chuỗi "hello", n = 5 (độ dài chuỗi).
2. Liệt kê tất cả các biến, cấu trúc dữ liệu và hàm được sử dụng: Bao gồm biến tạm, mảng, ngăn xếp, v.v.
3. Đánh giá không gian cho mỗi thành phần: Tính xem mỗi biến hoặc cấu trúc chiếm bao nhiêu bộ nhớ theo n. Bỏ qua các hằng số và tập trung vào các thành phần phụ thuộc vào n.
4. Tổng hợp và lấy thành phần chủ đạo: Cộng tất cả không gian lại và biểu diễn dưới dạng Big O notation (ví dụ: O(n), O(n²)).

## Khi làm việc với mảng

- Chú ý hàm đó có làm thay đổi của mảng ban đầu không?

* Nếu một hàm làm thay đổi mảng ban đầu -> Gọi là hàm “mutating” (hàm có tính biến đổi) và hành động đó gọi là mutation.
* Định nghĩa: Mutation nghĩa là thay đổi trạng thái gốc (original state) của một object, mảng, hoặc dữ liệu ban đầu trong bộ nhớ. Nếu hàm tác động trực tiếp lên dữ liệu đầu vào → đó là hàm mutating.

- Mutating: push, splice, reverse, sort
- Non-mutating: map, filter, slice, concat, reduce

## Functional programming - Các tiêu chí để xem mức độ tuân thủ các triết lý bên dưới đến đâu để được xem là lập trình hàm (Nói cách khác: một hàm hoặc một đoạn code càng ít mutation, càng thuần (pure), càng xử lý qua function composition, thì càng “functional”)

- Functional Programming (FP) xuất phát từ toán học thuần túy — cụ thể là lambda calculus (giải tích lambda). Mục tiêu: mỗi hàm luôn trả về cùng kết quả khi cùng input, và không có side effect (tác dụng phụ). (pure function).
- Tránh việc thay đổi trạng thái (state) và dữ liệu có thể thay đổi (mutable data): FP tránh mutation — tức là không thay đổi dữ liệu gốc. Nếu muốn “thay đổi”, ta tạo ra bản sao mới (spread).
- Hàm là first-class citizens: Trong FP (và JavaScript), hàm được coi là giá trị bình thường — giống như biến, số, chuỗi. Nghĩa là:

* Có thể gán cho biến
* Có thể truyền làm tham số
* Có thể trả về từ hàm khác

## Function composition

- Function composition (tạm dịch: hàm hợp thành) là kỹ thuật kết hợp nhiều hàm nhỏ, mỗi hàm làm một việc đơn giản, để tạo ra một hàm mới phức tạp hơn. Nói cách khác, 🎯 Output của hàm này → trở thành Input của hàm kế tiếp.

## Comment cho hàm

- Khai báo hàm trước, sau đó trên hàm đó /\*\* \*/ và enter nó sẽ tự động sinh @param, @returns, ... cho comment này

## Có bao nhiêu cách chạy 1 file javascript?

- Chạy bằng Node.js (môi trường backend / console)

* Dùng lệnh: node file.js
* Phù hợp khi: Không cần truy cập DOM, window, hay document
* Phù hợp khi: Chạy các chương trình thuật toán, CLI, server-side logic

- Khi đó, JavaScript được thực thi trong môi trường Node.js runtime (không có trình duyệt).

* Chạy trong trình duyệt (Browser)
* Khi file cần tương tác với DOM, UI, hoặc sự kiện người dùng, ta phải nhúng vào file HTML
* Vì chỉ trong browser environment, ta mới có các đối tượng như: window, document, navigator, localStorage

## MDN reference

- những API nào có trong bộ tài liệu web chuẩn (Web APIs hoặc ECMAScript chuẩn) thì mới có “MDN reference”.
- Tuy nhiên, chỉ những API nào được Microsoft thêm thủ công vào file lib.dom.d.ts hoặc lib.es5.d.ts có link MDN thì mới hiện ra.
- Nhưng nhiều method nhỏ hơn như split, reverse, join, trim… chưa được thêm metadata MDN ⇒ nên hover vào sẽ chỉ hiện mô tả type, không có link.
