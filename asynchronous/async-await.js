// async/await là cú pháp giúp bạn viết code bất đồng bộ (asynchronous) trông như đồng bộ (synchronous).
// Nó chỉ là “đường tắt” (syntax sugar) của Promise, không tạo ra cơ chế mới nào cả.
// Hay nói cách khác, Async/Await là cú pháp giúp làm việc với Promise dễ dàng hơn, thay vì dùng .then() và .catch() như trước đây.
// Lưu ý: async/await không thay thế cho Promise, mà nó hoạt động dựa trên Promise.
// async/await giúp code dễ đọc, dễ hiểu hơn, đặc biệt khi có nhiều thao tác bất đồng bộ nối tiếp nhau.

/* 
1. Async function dùng để khai báo với Javascript rằng một hàm là bất đồng bộ. Một async function sẽ luôn trả về một Promise.
2. await chỉ được sử dụng bên trong async function. Nó giúp tạm dừng việc thực thi hàm cho đến khi Promise hoàn thành (resolve) hoặc bị từ chối (reject). 
*/

const testPromise = new Promise((resolve, reject) => {
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

// Xử lý kết quả của Promise trên bằng try catch finally thay vì then catch finally
// Lưu ý try catch finally phải được bọc trong 1 async function thì mới dùng await được
// Cách 1 tạo async function: async function asyncFunction(){}
// Cách 2 tạo async function: async function asyncFunction(){}
const asyncFunction = async () => {
  try {
    // Viết function trả về Promise thì mới cần đóng ngoặc tròn vd testPromise()
    const message = await testPromise; // Chờ Promise hoàn thành
    console.log("Thành công:", message);
  } catch (error) {
    console.error("Lỗi:", error);
  } finally {
    console.log("Promise đã kết thúc (dù thành công hay thất bại).");
  }
};

// Thực thi hàm
asyncFunction();
// Lưu ý: Khi gọi asyncFunction() nó sẽ trả về một Promise. Nếu bạn muốn xử lý kết quả của asyncFunction(), bạn có thể sử dụng .then() và .catch() khi gọi nó.

// Bài 2: IIFE ()
const testPromise1 = new Promise((resolve, reject) => {
  // Giả sử đây là tác vụ bất đồng bộ, ví dụ gọi API
  let success = true; // Thay đổi thành false để thử reject

  setTimeout(() => {
    if (success) {
      resolve("Promise đã được hoàn thành!"); // Tác vụ thành công
    } else {
      reject("Promise bị từ chối!"); // Tác vụ thất bại
    }
  }, 1000); // Giả lập tác vụ mất 2 giây
});

// Sử dụng IIFE (Immediately Invoked Function Expression) để tạo và gọi async function ngay lập tức
// Lưu ý IIFE phải có ; ở trước nó và sau nó để tránh lỗi nó bị xem là tham số của dòng trên
(async () => {
  try {
    const message = await testPromise1; // Chờ Promise hoàn thành
    console.log("Thành công:", message);
  } catch (error) {
    console.error("Lỗi:", error);
  } finally {
    console.log("Promise đã kết thúc (dù thành công hay thất bại).");
  }
})();

// Bài 3
// Ví dụ về async/await với fetch API
// Get list pokemon với promise
const getListPokemon = async (limit = 10) => {
  try {
    // Biểu thức sau await phải là một trong hai loại:
    // 1. Một Promise (trực tiếp hoặc gián tiếp)
    // 2. Một giá trị bất kỳ (sẽ được tự động chuyển thành Promise resolved)
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
      {
        method: "GET",
      }
    );
    // nhớ là phải .json() để parse dữ liệu từ stream về object
    const pokemons = await res.json(); // Đa phần dự án thực tế sử dụng axios để không cần gọi 2 bước như thế này nữa
    console.log(pokemons);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Fetch promise is completed");
  }

  /* // fetch không phải là constructor nên không sử dụng new
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      // fetch() nhận về stream dữ liệu (chưa chắc đã tải xong).
      // response.json() đọc stream đó bất đồng bộ và parse nó thành object.
      // Vì vậy nó phải là Promise — để bạn chờ .then().
      response.json().then((data) => console.log(data));
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    })
    .finally(() => {
      console.log("Fetch promise is completed"); // Cái này sẽ được log sau cái then lồng trong response.json() ở trên
    }); */
};

// getListPokemon();
getListPokemon();

// // 4. Vấn đề Async/Await Hell là gì? Có giống Callback Hell hoặc Promise Hell hay không?
// // Ví dụ đơn giản, có 5 cái Job, giả sử chúng nó có nhiệm vụ riêng biệt không hề liên quan đến nhau mà gọi như
// // dưới đây sẽ gây ảnh hưởng nghiêm trọng về hiệu suất bởi vì chúng nó phải chờ nhau chứ không chạy cùng lúc.
// // => Async/Await.
try {
  await Job_1(); // Job 1 chạy
  await Job_2(); // Job 2 phải chờ Job 1 hoàn thành
  await Job_3(); // Job 3 phải chờ Job 2 và 1 hoàn thành
  await Job_4(); // Job 4 phải chờ Job 3, 2 và 1 hoàn thành
  await Job_5(); // Job 5 phải chờ Job 4, 3, 2 và 1 hoàn thành
} catch (error) {
  console.log(error);
}
// Chỉ nên dùng như trên nếu tác vụ 2 phụ thuộc vào kết quả của tác vụ 1, tác vụ 3 phụ thuộc vào kết quả của tác vụ 2, ...
// Còn nếu các tác vụ không phụ thuộc vào nhau thì nên chạy song song như dưới đây để tối ưu hiệu suất
try {
  const results = await Promise.all([
    Job_1(),
    Job_2(),
    Job_3(),
    Job_4(),
    Job_5(),
  ]);
  console.log(results); // Mảng kết quả từ các Job
} catch (error) {
  console.log(error);
}
// Promise.all() sẽ trả về một Promise mới, mà Promise này sẽ resolve khi tất cả các Promise trong mảng truyền vào đều resolve.

// Question
/* 1. Tại sao 1 async function luôn trả về một Promise?
2. Sự khác biệt giữa async/await và Promise là gì?
3. Khi nào nên sử dụng async/await thay vì Promise?
4. Làm thế nào để xử lý lỗi khi sử dụng async/await?
5. Có thể sử dụng async/await bên ngoài một async function không? Tại sao?
6. Làm thế nào để chạy nhiều tác vụ bất đồng bộ song song với async/await?
7. Làm thế nào để chuyển đổi một hàm sử dụng Promise sang sử dụng async/await?
8. Nếu có nhiều await trong 1 function thì sẽ chạy như thế nào? Và một cái bị lỗi thì sẽ ra sao?
9. Promise all, allSettled, race,... */
