// Viết chương trình nhập vào năm sinh và in ra số tuổi
function getAge(year) {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
}

console.log(getAge(1996));

// Bài 2: Viết chương trình đếm ngược thời gian từng giây (countdown) dựa vào thời gian đầu vào. Ví dụ
// thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian làm bài
// Nhớ là phải clearInterval bên trong setInterval
function countdown(minutes = 30) {
  const totalTime = minutes * 60; // 1800 seconds
  let count = 0;
  const timer = setInterval(function () {
    count++;
    console.log(`Đã trôi qua ${count} giây`);
    if (count === totalTime) {
      clearInterval(timer);
      console.log("Hết giờ!");
    }
  }, 1000);
}

countdown(0.5);

// Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại,
// ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online 3 phút trước,
// 3 ngày trước, 2 tháng trước, 30 giây trước, 1 năm trước
function timeSince(inputDate) {
  // chuyển đầu vào thành Date
  const date = new Date(inputDate);
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000); // số năm
  if (interval >= 1) {
    return interval === 1 ? "1 năm trước" : `${interval} năm trước`;
  }

  interval = Math.floor(seconds / 2592000); // số tháng
  if (interval >= 1) {
    return interval === 1 ? "1 tháng trước" : `${interval} tháng trước`;
  }

  interval = Math.floor(seconds / 86400); // số ngày
  if (interval >= 1) {
    return interval === 1 ? "1 ngày trước" : `${interval} ngày trước`;
  }

  interval = Math.floor(seconds / 3600); // số giờ
  if (interval >= 1) {
    return interval === 1 ? "1 giờ trước" : `${interval} giờ trước`;
  }

  interval = Math.floor(seconds / 60); // số phút
  if (interval >= 1) {
    return interval === 1 ? "1 phút trước" : `${interval} phút trước`;
  }

  // nhỏ hơn 1 phút thì tính giây
  return seconds <= 1 ? "vừa xong" : `${seconds} giây trước`;
}

// `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`
// 1 năm = 365 * 24 * 60 * 60 = 31536000
// 1 tháng = 31 * 24 * 60 * 60 = 2678400
// 1 tuần = 7 * 24 * 60 * 60 = 604800
// 1 ngày = 1 * 24 * 60 * 60 = 86400
// 1 giờ = 1 * 60 * 60 = 3600
// 1 phút = 1 * 60 = 60
