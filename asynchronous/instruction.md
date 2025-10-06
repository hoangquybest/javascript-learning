## Bất đồng bộ

- Asynchronous
- Callback (Callback Hell)
- Promise (Promise Hell)
- Async/Await
- Event Loop

## Asynchronous

- setTimout()

## Có bao nhiêu loại callback

- Mặc dù không có một con số chính xác và cố định về "tổng cộng bao nhiêu loại callback" vì chúng chỉ là các hàm được truyền dưới dạng tham số, nhưng trong JavaScript, Callback thường được phân loại dựa trên cách thức thực thi của chúng, chia thành hai loại chính:

* Callbacks Đồng bộ (Synchronous Callbacks): Đây là các hàm callback được thực thi ngay lập tức và trực tiếp trong cùng một luồng code (thread) và không chờ đợi bất kỳ sự kiện nào. Hàm được gọi và hoàn thành trước khi hàm mẹ trả về kết quả. Thường dùng để lặp (iterate) hoặc biến đổi (transform) dữ liệu trong mảng. Khi dùng map(), callback chạy cho từng phần tử ngay lập tức.
* Callbacks Bất đồng bộ (Asynchronous Callbacks): Đây là các hàm callback được thực thi sau này (at a later time), sau khi một tác vụ bất đồng bộ đã hoàn thành. Chúng được đẩy vào Event Loop để chờ đợi.
