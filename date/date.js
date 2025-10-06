// build-in object
const now = new Date();
console.log(now); // Sun Sep 28 2025 18:25:04 GMT+0700 (Giờ Đông Dương), Timezone: GMT + 07
// Second: 04
// Minute: 25
// Hour: 18
// year: 2025
// Month: Sep
// Day: 28
// Day of the week: Sun
// Timestamp & Epoch time
// Unix time
// timestamp tính ra kết quả là milisecond
console.log(now.getTime()); // print timestamp 1759059781314 -> use case: count down
console.log(new Date(0)); // Thu Jan 01 1970 08:00:00 GMT+0800 (Giờ Đông Dương)

// Cách sử dụng new Date() - 4 cach su dung
// new Date() -> in ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
// new Date(date String) ->
// new Date( year, month, hours, minutes, miliseconds)
// month tính từ số 0
// getFullYear() -> trả về năm
// getMonth() -> trả về tháng -> chạy từ 0(Jan) đến 11(Dec) ->
// getDate() -> trả về ngày của tháng: 1 -> 31
// getDay() -> từ 0(chủ nhật) - 6(thứ 7)
// getHours() -> giờ
// getMinutes() -> phút
// getMiliseconds() -> in ra giây
// getTime() -> timestamp
// Ngược lại cho tất cả các hàm get ở trên là hàm set

// UTC time -> thêm chữ UTC sau get
console.log(now.getUTCFullYear());

console.log(now.toDateString()); // Sun Sep 28 2025
console.log(now.toTimeString()); // 20:08:39 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString()); //ở vn: "28/9/2025"
console.log(now.toLocaleDateString("vi-VI")); // "28/9/2025"
console.log(now.toLocaleDateString("en-US")); // "9/28/2025"
console.log(now.toLocaleDateString("vi-VN")); // "28/9/2025"

// Nó trả về chuỗi ngày giờ theo chuẩn ISO 8601, luôn ở UTC (không phụ thuộc múi giờ máy)
// 2025-09-28T13:15:29.300Z
console.log(now.toISOString());

// setTimeout -> sau khoảng thời gian bao lâu thì làm gì chỉ làm 1 lần,
// clearTimeout(id) -> Hủy một tác vụ chưa thực thi hoặc đang đợi, có thể cho điều kiện if gì đấy trước khi clear
const timeoutId = setTimeout(() => {
  console.log("Sẽ không bao giờ chạy");
}, 5000);

// Hủy trước khi nó chạy
clearTimeout(timeoutId);

// setInterval -> cứ sau thời gian bao lâu làm gì đó
// clearInterval(id) -> Dừng việc lặp lại liên tục, có thể cho điều kiện if gì đấy trước khi clear
let count = 0;
const intervalId = setInterval(() => {
  console.log("Đang chạy", ++count);
  if (count === 5) {
    clearInterval(intervalId); // Dừng sau 5 lần
  }
}, 1000);
