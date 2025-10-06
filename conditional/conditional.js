// Bài 1: Đăng nhập số tuổi và kiểm tra nếu số tuổi lớn hơn hoặc bằng 18 thì được coi phim rạp ngược lại thì không được vô coi
// ==============================
// Cấu hình / Hằng số
// ==============================
const MINIMUM_AGE_TO_WATCH = 18; // tuổi tối thiểu xem phim rạp

// ==============================
// Logic kiểm tra tuổi
// ==============================
function isAdult(age) {
  console.log(age);
  return Number(age) >= MINIMUM_AGE_TO_WATCH;
}

// ==============================
// Xử lý quyền truy cập
// ==============================
function handleAccess(age) {
  if (isAdult(age)) {
    console.log("🎉 Chúc mừng bạn đủ tuổi xem phim!");
    // có thể return flag nếu muốn dùng sau này
    return true;
  }

  alert("⚠️ Xin lỗi bạn không đủ tuổi để xem phim!");
  return false;
}

// ==============================
// Main flow
// ==============================
const yourAge = prompt("Vui lòng nhập vào số tuổi của bạn", "");
handleAccess(yourAge);
