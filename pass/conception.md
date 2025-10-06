## Nếu muốn sao chép độc lập một object / array

- Dùng spread

* const copy = {...original};
* const arrCopy = [...arr];

- Dùng structuredClone() (ES2022)

* const clone = structuredClone(original);

## Khái niệm pass by value và pass by reference

- Trong JavaScript, primitive types (như number, string, boolean, null, undefined, symbol, bigint) được truyền theo giá trị — nghĩa là khi gán hay truyền vào hàm, ta tạo ra bản sao độc lập.
- Còn object types (như object, array, function) được truyền theo tham chiếu (reference) — thực chất là truyền vào địa chỉ vùng nhớ, nên nếu thay đổi nội dung bên trong, giá trị gốc cũng bị ảnh hưởng.
- Vì vậy, khi cần giữ tính bất biến (immutable), đặc biệt trong React, ta phải clone hoặc tạo object mới thay vì mutate trực tiếp để đảm bảo React nhận ra sự thay đổi.
