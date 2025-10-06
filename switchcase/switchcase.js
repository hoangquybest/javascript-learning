function checkNumber(value) {
  // nếu người dùng nhấn Cancel prompt
  if (value === null) {
    alert("Bạn đã hủy nhập.");
    return;
  }

  // Ép sang số
  const num = Number(value);

  // Kiểm tra bằng switch dựa trên true/false
  switch (true) {
    case Number.isNaN(num):
      alert(`"${value}" không phải là số hợp lệ.`);
      break;

    default:
      alert(`"${num}" là một số hợp lệ.`);
      break;
  }
}

// Main flow
const input = prompt("Kiểm tra có phải số hay không", "");
checkNumber(input);
