## Spread

- clone mảng: const arr2 = [...arr1];
- Nối merge nhiều mảng: const c = [...a, ...b];
- Sao chép và thêm phần tử: const newArr = [1, ...arr, 4];

- Sao chép và hợp nhất object: const updated = { ...user, age: 31, city: 'Hanoi' };

- Truyền tham số vào hàm: const max = Math.max(...nums);

- Chuyển NodeList hoặc Set thành mảng
  const divs = document.querySelectorAll('div');
  const divArray = [...divs];
  console.log(Array.isArray(divArray)); // true

  const s = new Set([1, 2, 3]);
  const arr = [...s];
  console.log(arr); // [1, 2, 3]

- Tạo shallow copy để tránh mutate
  setTodos([...todos, newTodo]);

- Destructuring + Spread để tách phần còn lại
  const [first, ...rest] = [10, 20, 30, 40];
  console.log(first); // 10
  console.log(rest); // [20, 30, 40]

  const { name, ...info } = { name: 'Quy', age: 25, city: 'Hanoi' };
  console.log(info); // { age: 25, city: 'Hanoi' }

- Copy mảng đa chiều (nông), Spread chỉ clone shallow (nông), không clone sâu (deep copy).
  const matrix = [[1, 2], [3, 4]];
  const clone = [...matrix];
  clone[0][0] = 99;

  console.log(matrix[0][0]); // 99 ❌

- Tạo object/mảng mặc định (default values)
  const defaultConfig = { debug: false, cache: true };
  const userConfig = { debug: true };
  const finalConfig = { ...defaultConfig, ...userConfig };
  console.log(finalConfig);
  // { debug: true, cache: true }

## Destructuring

- Destructuring với Array
- Bỏ qua phần tử
- Gán giá trị mặc định
- Destructuring với Object
- Ứng dụng thực tế

* Truyền tham số vào hàm
  function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
  }

  greet({ name: "Tuan", age: 25 });

* Hoán đổi giá trị (swap)
  let a = 1, b = 2;
  [a, b] = [b, a];
  console.log(a, b); // 2, 1

- Destructuring với Array sử dụng cú pháp const [a, b] = arr; — giá trị được gán theo vị trí phần tử trong mảng.
- Destructuring với Object sử dụng cú pháp const { name } = obj; — giá trị được gán theo tên thuộc tính trong đối tượng.
