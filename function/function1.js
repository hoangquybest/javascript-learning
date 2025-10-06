// Bài 1: Viết hàm so sánh 2 số a, b tìm ra số lớn hơn
const compareNumber = function (a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("invalid input");
    return;
  }
  return Math.max(a, b);
};

console.log(compareNumber(10, 100));
console.log(compareNumber("00", 100)); // undefined vì nó chỉ có return;

// Bài 2: In hoa chữ cái đầu trong tên, NAM -> Nam, tuan -> Tuan
const capitalize = function (name) {
  if (typeof name !== "string" || name.length === 0) {
    return null;
  }
  name = name.toLowerCase();
  const newName = name.charAt(0).toUpperCase() + name.slice(1);
  return newName;
};

console.log(capitalize("tuan"));
console.log(capitalize("NAM"));
console.log(capitalize(""));
console.log(capitalize(1));

// Bài 3: In hoa chữ cái đầu trong tên, ví dụ hoang NAM - > Hoàng Nam, LE khang -> Le Khang
function normalizeName(fullName) {
  if (!fullName) return "";

  return fullName
    .trim() // xoá khoảng trắng đầu cuối
    .split(/\s+/) // tách theo 1 hoặc nhiều khoảng trắng
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Ví dụ sử dụng:
console.log(normalizeName("hoang NAM")); // Hoang Nam
console.log(normalizeName("LE khang")); // Le Khang
console.log(normalizeName("   nguyen    VAN   a  ")); // Nguyen Van A

// Bài 4: Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
function useCallback(a, b, callback) {
  const max = compareNumber(a, b);
  callback(max);
}

function print(number) {
  console.log(`Max Number is: ${number}`);
}

useCallback(100, 200, print);
