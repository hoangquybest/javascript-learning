## NodeList

🔹 NodeList là một tập hợp (collection) các node (nút) trong DOM (Document Object Model).
Nó được trả về khi bạn dùng các hàm truy vấn phần tử trong HTML, ví dụ:

    document.querySelectorAll()
    childNodes
    getElementsByName() (trong một số trường hợp)

    1️⃣ Static NodeList được tạo bởi document.querySelectorAll("p"), là một ảnh chụp “tĩnh” của DOM tại thời điểm gọi hàm, nên sẽ không tự cập nhật khi DOM thay đổi.

    2️⃣ Live NodeList (từ document.getElementsByTagName("p") hoặc element.childNodes) thì tự động phản ánh thay đổi của DOM, tức là nếu thêm hoặc xóa phần tử, danh sách này sẽ cập nhật ngay lập tức.

## Spread

- spread operator (...) là toán tử dùng để “trải” các phần tử của một mảng hoặc một object ra ngoài — giống như “bung” chúng ra từng phần riêng lẻ.

## Destructuring

- Destructuring (phá cấu trúc / giải cấu trúc) là cú pháp giúp “bóc tách” dữ liệu từ mảng (array) hoặc đối tượng (object) rồi gán trực tiếp vào biến riêng lẻ.
