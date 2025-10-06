// Duyệt qua từng phần tử trong mảng và trả về 1 mảng mới mà không thay đổi mảng ban đầu
// map nhận vào 1 callback
// Viết một hàm trả về một mảng với các phần tử + 2
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((value, index, arr) =>
  index % 2 ? value + 2 : value - 2
);
console.log(newArr);

const newArr2 = arr.map(function (value, index) {
  return index % 2 ? value * 2 : value;
});

console.log(newArr2);
