// Capitialize words in a string.
// String này như thế nào? Có xuất hiện khoảng trắng thừa không? Có xuất hiện ký tự đặc biệt không?
// Giữa từ có thể có thể viết hoa không?
// Có từ nào viết hoa hoàn toàn không?

const capitalize = function (name) {
  name = name.toLowerCase();
  const newName = name.charAt(0).toUpperCase() + name.slice(1);
  return newName;
};

const capitalizeWords = (str) => {
  // validate input
  //...
  if (!str) return null; // false, 0, -0, 0n, "", null, undefined, NaN
  // Dùng ngoặc nhọn không tự return
  return str
    .split(" ")
    .filter(Boolean)
    .map((word) => capitalize(word))
    .join(" ");
};

const str = "  hello,   world! 0 this is a test.  ";
console.log(capitalizeWords(str));
console.log(str);

// Đầu tiên cần tách các chữ trong chuỗi thành mảng các từ bằng cách dùng split(" ").
// Bỏ khoảng trắng thừa ở đầu, cuối và giữa các từ bằng cách dùng filter(Boolean).
// Duyệt mảng các từ, với mỗi từ dùng hàm capitalize() để viết hoa chữ cái đầu.
// Cuối cùng, nối mảng các từ đã viết hoa thành chuỗi mới bằng cách dùng join(" ").

// Đối với hàm capitalize:
// Kiểm tra nếu input không phải chuỗi hoặc chuỗi rỗng thì trả về null.
// Chuyển toàn bộ chuỗi về chữ thường để chuẩn hóa.
// Viết hoa chữ cái đầu bằng cách dùng charAt(0).toUpperCase() và nối với phần còn lại của chuỗi dùng slice(1).
// Trả về chuỗi đã viết hoa chữ cái đầu.
