// *************************************************************************************************
// Cách 1: Sử dụng split(''), reverse(), join('').
// Time complexity: O(3n)
const str1 = "Hello world!";
str1.split("").reverse().join("");
console.log(arr1.split("").reverse().join(""));

// *************************************************************************************************
// Cách 2: Sử dụng vòng lặp for
const str2 = "Hello world!";
let reversed = "";

for (let i = str2.length - 1; i >= 0; i--) {
  reversed += str2[i];
}

console.log(reversed);
// Vòng lặp chạy từ cuối chuỗi về đầu, duyệt qua từng ký tự một lần → O(n) với n = str.length.
// phép nối chuỗi reversed += str[i] trong JavaScript có độ phức tạp O(n) do chuỗi là immutable, mỗi lần nối cần tạo bản sao mới của chuỗi cũ và thêm ký tự mới.
// Worst-case time complexity: O(n²)
// Best-case: Vẫn là O(n²) do cơ chế nối chuỗi.
// Biến str chiếm O(n) bộ nhớ.
// Biến reversed:
// Khi kết thúc, chuỗi reversed có độ dài n → O(n).
// Trong quá trình thực thi, các chuỗi trung gian được tạo ra do nối chuỗi liên tục (với tổng chiều dài ~O(n²)), nhưng bộ nhớ tối đa sử dụng cùng lúc là O(n) do garbage collector có thể dọn dẹp các chuỗi cũ.
// Kết luận:
// Space complexity: O(n) (bộ nhớ sử dụng cuối cùng).
// Auxiliary space (bộ nhớ bổ sung): O(n) để lưu kết quả.
// Để giảm độ phức tạp thời gian xuống O(n), có thể dùng mảng để lưu ký tự bằng cách push() và nối bằng .join():

// *************************************************************************************************
// Cách 3: Dùng reduce() - functional programming

/* Time Complexity (Độ phức tạp thời gian)
1. str.split("")
* Tách chuỗi thành mảng các ký tự
* Time complexity: O(n) - duyệt qua từng ký tự
2. reduce((acc, char) => char + acc, "")
* Duyệt qua từng phần tử trong mảng (n phần tử)
* Mỗi lần gọi callback: char + acc
* Vấn đề: Phép nối chuỗi char + acc có độ phức tạp O(k) với k là độ dài chuỗi hiện tại
    * Lần 1: acc = "" + "h" → O(1)
    * Lần 2: acc = "e" + "h" → O(2)
    * Lần 3: acc = "l" + "eh" → O(3)
    * ...
    * Lần n: acc = "o" + "lleh" → O(n)
Tổng time complexity: 1 + 2 + 3 + ... + n = n(n+1)/2 → O(n²)
 */

/* Space Complexity (Độ phức tạp không gian)
Bộ nhớ sử dụng:
1. Chuỗi gốc str: O(n)
2. Mảng từ split(): O(n)
3. Các chuỗi trung gian trong reduce:
    * Tạo ra n chuỗi tạm thời với tổng kích thước O(n²)
4. Chuỗi kết quả reversed: O(n)
Space complexity: O(n²) (do các chuỗi trung gian) Auxiliary space: O(n) (chỉ xét bộ nhớ bổ sung không bao gồm input/output) */
const str3 = "Hello world!";
const reversedString = str3.split("").reduce((acc, curr) => curr + acc, "");
console.log(reversedString);

// *************************************************************************************************
// Cách 4: Dùng toán tử Spread
/* Time Complexity (Độ phức tạp thời gian)
javascript
const str = "hello";
const reversed = [...str].reverse().join("");
1. [...str] - Spread operator để tạo mảng:
* Duyệt qua từng ký tự của chuỗi
* Time: O(n)
2. .reverse() - Đảo ngược mảng:
* Đảo ngược mảng tại chỗ (in-place)
* Sử dụng two-pointer technique (đầu và cuối)
* Time: O(n)
3. .join("") - Ghép mảng thành chuỗi:
* Duyệt qua từng phần tử trong mảng
* Time: O(n)
Tổng time complexity: O(n) + O(n) + O(n) = O(n) */

/* Space Complexity (Độ phức tạp không gian)
Bộ nhớ sử dụng:
1. Chuỗi gốc str: O(n) (input)
2. Mảng từ [...str]: O(n)
3. Mảng sau .reverse(): Vẫn là O(n) (cùng mảng)
4. Chuỗi kết quả reversed: O(n) (output)
Phân tích peak memory (bộ nhớ cao nhất cùng lúc):
* Khi thực hiện .join(""), chúng ta có:
    * Mảng đã reverse: O(n)
    * Chuỗi đang được xây dựng: O(n)
* Peak memory: O(n) + O(n) = O(n)
Auxiliary space (bộ nhớ bổ sung): O(n) */
const str4 = "Hello world!";
const reversedString4 = [...str4].reverse().join("");
console.log(reversedString4);

// Đảo từng từ nhưng giữ dấu
const str5 = "Hello, world!";

const reversedStr5 = str5.replace(/\b\w+\b/g, (word) =>
  word.split("").reverse().join("")
);

console.log(reversedStr5); // "olleH, dlrow!"
