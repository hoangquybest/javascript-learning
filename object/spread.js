// Hãy bung (spread) tất cả các thuộc tính (properties) của đối tượng cat1 ra và chèn chúng vào đối tượng mới (cat2) ngay tại vị trí này.
const cat1 = {
  name: "doreamon",
  age: 4,
  breed: "bengal", // Các thuộc tính từ cat1
};

const cat2 = {
  ...cat1, //  // Bước 1: Chèn name: "doreamon", age: 4, breed: "bengal"
  breed: "persian", // Bước 2: Thêm thuộc tính 'breed' mới, Vì thuộc tính breed được thêm vào sau khi breed: "bengal" của cat1 đã được chèn, nó sẽ ghi đè (overwrite) lên giá trị cũ.
};
