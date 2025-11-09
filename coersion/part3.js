// Coersion - ép kiểu
// Các kiểu coersion
// I. Explicit coercion (ép kiểu tường minh)
// 1. parseInt/parseFloat
// 2. Number(value)
// 3. String(value)
// 4. Boolean(value)
// 5. type coersion trong các toán tử + - * / > < ==
// 6. prompt, confirm, alert

// II. Implicit coercion (ép kiểu ngầm định)
// 1. Toán tử + (nối chuỗi)
// 2. ToString coercion - JS tự ép kiểu về chuỗi khi cần context là string:
// Toán tử + có một operand là string
// Template literals `${value}`
// alert(), console.log(), hoặc DOM API - alert(42) // hiển thị "42"

// V. Tóm tắt “Toàn bộ các case implicit coercion” (có thể nhớ như checklist)
// A. Boolean context → if, !, &&, ||, ??, ternary
// B. Numeric context → + (nếu không có string), -, *, /, %, <, >, ==, ++, --, bitwise
// C. String context → string concatenation, template string, alert/log
// D. Object context → cần primitive → gọi valueOf / toString / Symbol.toPrimitive

// III. prompt, alert, confirm không phải hàm ép kiểu nhưng có hành vi ép kiểu.

// Parse to number with parseInt/parse - Ép kiểu string sang number
// Cơ chế: đọc chuỗi từ trái sang phải, gặp ký tự không hợp lệ cho số thì dừng lại.
// Chú ý: chỉ nhận chuỗi hợp lệ, nên nếu bạn truyền kiểu khác như false hoặc undefined, JavaScript sẽ chuyển sang chuỗi trước rồi parse
// parseInt và parseFloat là string parser chứ không phải type converter tổng quát
console.log(parseFloat("4.8")); // 4.8 - đọc đươc ký tự . nên không dừng
console.log(parseInt("4.8")); // 4 - dừng khi gặp ký tự .
console.log(parseFloat("4.8abs")); // 4.8 - dừng khi gặp ký tự a
console.log(parseInt("4"));
console.log(parseInt(false)); // NaN
console.log(parseInt("")); // NaN
parseInt(undefined); // NaN - undefined -> "undefined" -> NaN

// Number parsed from string - ép kiểu tổng quát sang number
// Lưu ý: Chỉ có undefined và NaN -> NaN khi ép kiểu dùng Number
/* Number() — Ép kiểu tổng quát (general coercion)
    Number() là hàm chuyển đổi kiểu dữ liệu tổng quát — nó có thể ép:
        string → number
        boolean → number
        null → number
        undefined → number
        thậm chí cả object → number (qua valueOf/toString) */

/* Nếu value là:
undefined → trả về NaN
null → trả về +0
boolean → true → 1, false → 0
number → giữ nguyên
string → chuyển chuỗi thành số (nếu chuỗi hợp lệ)
object → gọi valueOf() hoặc toString() để lấy giá trị primitive trước rồi chuyển tiếp */

/* {} (object rỗng) → toString() ra "[object Object]" → Number(...) → NaN. Vì "[object Object]" không phải chuỗi số.
[] → [].toString() là "" → Number("") là 0. Vì vậy Number([]) === 0.
[123] → "123" → Number thành 123.
[1,2] → "1,2" → NaN. */
console.log(Number("4")); // 4
console.log(Number("4.7")); // 4.7
console.log(Number("abc")); // NaN
console.log(Number("")); //0

// Number parse from null
console.log(Number(null)); // 0

// Number parsed from undefined
console.log(Number(undefined)); // NaN

// Number parsed from boolean
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Number parsed from NaN
console.log(Number(NaN)); // NaN

// Chú ý: Các toán tử khác như -, *, /, > … luôn ép kiểu về số chứ không nối chuỗi.
// Còn chỉ có toán tử + là đặc biệt — vì nó có thể làm việc với cả số và chuỗi,
// nên khi có một chuỗi xuất hiện, nó ưu tiên nối chuỗi thay vì cộng số.

// String(value)
console.log(String(4.5)); // 4.5
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"
console.log(String(false)); // "false"

// Boolean(value)
// falsy
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(false)); //false
console.log(Boolean(NaN)); //false
// truthy
console.log(Boolean(true));

// type coercion
// +
console.log(1 + 2);
console.log(10 + 20);
console.log(10 + "20"); // "1020" -> String(10)
console.log("10" + 20); // "1020" -> String(20)
console.log(10 + 10 + "20"); // "2020" -> String(20)
console.log("10" + 10 + 20); // "101020"
console.log(null + "20"); // "null20"

// -
console.log(10 - "20"); // -10 -> Number("20")
console.log(null - "20"); // -20
console.log("20" - null); // 20
console.log(undefined - "20"); // NaN
console.log("20" - undefined); // NaN
console.log("20" - false); // 20
console.log(false - "20"); // -20

// /
console.log(10 / "20"); // 0.5
console.log(null / "20"); // 0
console.log("20" / null); // Infinity -> Number(null)
console.log(undefined / "20"); // NaN
console.log("20" / undefined); // NaN
console.log("20" / false); // Infinity
console.log(false / "20"); // 0

// *
console.log(10 * "20"); // 200
console.log(null * "20"); // 0
console.log("20" * null); // 0
console.log(undefined * "20"); // NaN -> Number(underfined)
console.log("20" * undefined); // NaN
console.log("20" * false); // 0
console.log(false * "20"); // 0
console.log(NaN * "20"); // NaN

// > <
console.log("50" > 20); //true
console.log(null > 20); //false
console.log(undefined > 20); //false
console.log("" > 20); //false
console.log(false > 20); //false
console.log(NaN > 20); //false

console.log("50" < 20); //false
console.log(null < 20); //true
console.log(undefined < 20); //false
console.log("" < 20); //true
console.log(false < 20); //true
console.log(NaN < 20); //false

// == loose equality và === strict equality
console.log(10 == "20"); // Number(20) -> type coersion -> false
console.log(true == 1); // Number(true) -> type coersion -> true
console.log(undefined == 1); // false
console.log(null == 0); // false
console.log(undefined == null); // true
console.log(false == null); // false
console.log(false == 1); // Number(false) -> type coersion -> false

// prompt, confirm, alert
// alert("Your website has been hacked");
// const yourName = prompt("Vui lòng nhập tên của bạn", "");
// console.log(yourName);
// const isYourMoney = confirm("Đây có phải là tiền của bạn hay không?")
// console.log(isYourMoney) // true/false
