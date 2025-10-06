// Rest parameter ... syntax dùng để gộp các giá trị còn lại thành một mảng
const toys = ["ball", "car", "doll", "puzzle", "teddy bear"];
const [firstToy, secondToy, ...otherToys] = toys;
console.log(firstToy); // Output: ball
console.log(secondToy); // Output: car
console.log(otherToys); // Output: ["doll", "puzzle", "teddy bear"]
console.log("-----");

// Rest parameter ... syntax dùng để gộp các tham số còn lại thành một mảng
function sum(first, second, ...numbers) {
  console.log(first); // first tham số đầu tiên
  console.log(second); // second tham số thứ hai
  console.log(numbers); // numbers là mảng các tham số còn lại
  return numbers.reduce((total, num) => total + num, first + second);
}
const total = sum(1, 2, 3, 4, 5);
console.log(total); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log("-----");
