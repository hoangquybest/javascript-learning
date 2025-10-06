## Thứ tự

// Luồng thực thi:
// 1. "Start" → Call Stack → executed
// 2. setTimeout → Call Stack → giao cho Web APIs
// 3. "End" → Call Stack → executed  
// 4. Web APIs hoàn thành → đẩy callback vào Callback Queue
// 5. Event Loop kiểm tra Call Stack trống → lấy callback từ Queue → đưa vào Call Stack
// 6. "Timeout" được thực thi. Vậy giả sử settimeout là 5 giây tuy nhiên sau 5 giây

## Hoàn toàn có thể xảy ra trường hợp setTimeout 5 giây nhưng thực tế callback được thực thi sau nhiều giây hơn do

- Call Stack bận xử lý code đồng bộ
- Callback Queue có quá nhiều task đang chờ
- Microtask Queue liên tục được bổ sung

## Thứ tự ưu tiên của WEB APIS đối với event loop

## XHR, fetch và axios

- XHR: API gốc, low-level, phức tạp nhưng mạnh mẽ
- Fetch: API hiện đại, đơn giản, promise-based, KHÔNG dùng XHR
- Axios: Thư viện wrapper, dùng XHR trong trình duyệt, nhiều tính năng tiện ích

## fetch và axios (lưu ý fetch chỉ reject khi bị lỗi mạng)

- fetch: phải gọi .json() và await
- fetch: Phải tự check lỗi trả về từ server vì fetch chỉ reject khi bị lỗi network, nên giải quyết như bên dưới

```
const getListPokemon = async (limit = 10) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

    // ✅ Kiểm tra HTTP status
    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Chỉ chạy khi: lỗi mạng hoặc lỗi bạn ném ra ở trên
    console.error("Fetch failed:", error.message);
  }
};

getListPokemon();
```
