// Kiểu dữ liệu nguyên thuỷ primitive data type, truyền giá trị thật (vd: 10, "abc", true, undefined, null, Symbol)

// Khi tuyền vào hàm thì tạo bản sao của giá trị đó
// Không ảnh hưởng biến gốc
// Không cần clone thủ công
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
