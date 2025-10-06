// Promise là một đối tượng (object) dùng để xử lý bất đồng bộ (asynchronous) trong JavaScript.
// Nó đại diện cho một giá trị có thể chưa có sẵn ngay lúc này, nhưng sẽ có trong tương lai
// hoặc là thành công (fulfilled),
// hoặc là thất bại (rejected).

// Nói ngắn gọn: Promise giống như một “lời hứa” — bây giờ chưa có dữ liệu, nhưng sẽ có sau khi một tác vụ (như gọi API, đọc file, v.v.) hoàn tất.
// Promise có ba trạng thái chính: Pending (chờ), Fulfilled (hoàn thành), và Rejected (bị từ chối).
// Một Promise chỉ có thể chuyển từ Pending sang Fulfilled hoặc Rejected.
// Khi đã chuyển sang Fulfilled hoặc Rejected, trạng thái của Promise sẽ không thay đổi nữa (immutable).

let testPromise = new Promise((resolve, reject) => {
  // Giả sử đây là tác vụ bất đồng bộ, ví dụ gọi API
  let success = true; // Thay đổi thành false để thử reject

  setTimeout(() => {
    if (success) {
      resolve("Promise đã được hoàn thành!"); // Tác vụ thành công
    } else {
      reject("Promise bị từ chối!"); // Tác vụ thất bại
    }
  }, 2000); // Giả lập tác vụ mất 2 giây
});

testPromise
  .then((message) => {
    console.log("Thành công:", message);
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  })
  .finally(() => {
    console.log("Promise đã kết thúc (dù thành công hay thất bại).");
  });
