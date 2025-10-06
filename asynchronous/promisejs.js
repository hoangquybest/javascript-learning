let testPromise = new Promise((resolve, reject) => {
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

testPromise // Đây đang là biến nên không cần ()
  .then((message) => {
    console.log("Thành công:", message);
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  })
  .finally(() => {
    console.log("Promise đã kết thúc (dù thành công hay thất bại).");
  });

// Get list pokemon với promise
const getListPokemon = (limit = 10) => {
  // fetch không phải là constructor nên không sử dụng new
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
    });
};

// Get list pokemon với promise
const getListPokemon1 = (limit = 10) => {
  // fetch không phải là constructor nên không sử dụng new
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
      return response.json(); // chỗ này trả về luôn Promise từ response.json() để chain tiếp được
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    })
    .finally(() => {
      console.log("Fetch promise is completed"); // Cái này sẽ được log sau cái then ở trên vì nó không phải là then lồng bên trong
    });
};

// getListPokemon();
getListPokemon1();

// Promise chaning mà nhiều chain quá thì nó thành promise hell
