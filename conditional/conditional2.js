// Bài 2: Cho 2 số a và b, tìm số lớn hơn, sử dụng alert để show ra message số nào lớn hơn số nào

// Hàm validate input: trả về số hợp lệ hoặc null
function toNumberOrNull(value) {
  // Nếu user nhấn Cancel hoặc không nhập gì
  if (value === null || value === "") return null;

  const num = Number(value);
  return Number.isNaN(num) ? null : num;
}

// Hàm tìm số lớn hơn
function getLargerNumber(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  return null; // bằng nhau
}

// Hàm xử lý hiển thị
function showLargerNumberMessage(aInput, bInput) {
  const a = toNumberOrNull(aInput);
  const b = toNumberOrNull(bInput);

  if (a === null || b === null) {
    alert("⚠️ Bạn phải nhập số hợp lệ cho cả hai giá trị!");
    return;
  }

  const result = getLargerNumber(a, b);

  if (result === null) {
    alert(`Hai số ${a} và ${b} bằng nhau.`);
  } else {
    alert(`Số lớn hơn giữa ${a} và ${b} là: ${result}`);
  }
}

// Main flow
const a = prompt("Nhập số a:");
const b = prompt("Nhập số b:");

showLargerNumberMessage(a, b);
