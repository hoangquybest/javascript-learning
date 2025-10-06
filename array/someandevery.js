// Phương thức some
// Trả về true khi có ít nhất một phần tử thoả một điều kiện trong hàm callback

const products = [
  { name: "Laptop", inStock: false },
  { name: "Mouse", inStock: true },
  { name: "Monitor", inStock: false },
];

// Kiểm tra xem có bất kỳ sản phẩm nào còn hàng (inStock: true) không
const isAnyProductInStock = products.some((product) => product.inStock);

console.log(isAnyProductInStock); // Kết quả: true (vì Mouse còn hàng)

// Phương thức every kiểm tra xem tất cả (every) các phần tử trong mảng có thỏa mãn điều kiện được chỉ định trong hàm callback hay không

const users = [
  { name: "An", isActive: true },
  { name: "Binh", isActive: true },
  { name: "Cuong", isActive: false },
];

// Kiểm tra xem tất cả người dùng có đang hoạt động (isActive: true) không
const allActive = users.every((user) => user.isActive);

console.log(allActive); // Kết quả: false (vì Cuong isActive: false)
