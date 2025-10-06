// Pass by Reference (thực chất: pass by value of reference)
// Kiểu dữ liệu phức tạp complex data type / non-primitive (object, array, function) truyền tham chiếu (địa chỉ vùng nhớ)

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (Cả hai trỏ cùng 1 object, nên thay đổi obj2 sẽ ảnh hưởng obj1.)
console.log(obj2.name); // "Bob"

// ✅ 1. Khi làm việc với dữ liệu immutable (bất biến)
// Ví dụ: trong ReactJS, state phải được coi là immutable.
// ❌ Sai — đang mutate (thay đổi trực tiếp)
state.users.push(newUser);

// ✅ Đúng — tạo bản sao mới
setUsers([...state.users, newUser]);
// state.users là một array (object), React chỉ re-render khi reference thay đổi.
// Nếu bạn mutate, reference không đổi → React không nhận ra thay đổi.

// ✅ 2. Khi cần sao chép dữ liệu để không ảnh hưởng bản gốc
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1,2,3,4] ❗ - Vì arr2 trỏ cùng vùng nhớ.

// Muốn tách biệt
const arr3 = [...arr1];
arr3.push(4);
console.log(arr1); // [1,2,3] ✅

// ✅ 3. Khi truyền object vào hàm và không muốn bị mutate
function updateUser(user) {
  const copy = { ...user };
  copy.name = "New name";
  return copy;
}
// → Giúp giữ nguyên object gốc, tránh side-effect (ảnh hưởng phụ).
