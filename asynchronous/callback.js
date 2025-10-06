// Callback: Nền tảng xử lý bất đồng bộ trước khi có promise và async/await
/* Các hàm bất đồng bộ có thể tham khảo
1. setTimeout(callback, delay): Chạy hàm callback một lần sau một khoảng thời gian delay (tính bằng mili giây) được chỉ định.
2. setInterval(callback, delay): Chạy hàm callback lặp đi lặp lại sau mỗi khoảng thời gian delay.
3. fetch(): Hàm hiện đại dùng để thực hiện các yêu cầu mạng (HTTP request), thay thế cho XMLHttpRequest truyền thống. Nó trả về một Promise.
4. API WebSocket: Dùng để mở kết nối hai chiều liên tục với máy chủ.
5. Tác vụ File System (Node.js): Các hàm như fs.readFile() hay fs.writeFile() trong Node.js (phiên bản không có hậu tố Sync) đều là bất đồng bộ.
6. Tác vụ cơ sở dữ liệu: Hầu hết các thư viện tương tác với database (ví dụ: MongoDB, PostgreSQL) đều sử dụng các hàm bất đồng bộ để tránh chặn ứng dụng khi chờ đợi dữ liệu. 
7. element.addEventListener('click', callback): Hàm callback chỉ được gọi khi người dùng nhấp chuột vào phần tử.
8. Sự kiện tải (onload, onerror): Xử lý khi hình ảnh, script, hoặc toàn bộ trang đã tải xong.
9. Promise: Hàm constructor này được dùng để tạo ra một đối tượng đại diện cho một tác vụ bất đồng bộ. Các phương thức như .then() và .catch() sẽ được gọi khi Promise hoàn thành (resolve) hoặc thất bại (reject).
10. Hàm được khai báo với async: Bất kỳ hàm nào được định nghĩa bằng từ khóa async sẽ tự động trả về một Promise.
11. await: Được dùng bên trong hàm async để chờ một Promise hoàn thành trước khi tiếp tục thực thi các dòng code còn lại.

*/

/* 
1. Callback là một hàm được truyền dưới dạng tham số vào một hàm khác và được gọi sau khi hàm kia thực hiện xong
2. Sử dụng Callback để Giải quyết vấn đề bất đồng bộ
3. Ví dụ thực tế dễ hiểu trong việc gọi các APIs bất đồng bộ để lấy dữ liệu theo thứ tự mong muốn.
4. Callback Hell nghĩa là Khi các hàm Callback lồng nhau quá nhiều, dẫn đến việc maintain bảo trì code về sau rất khó khăn. 
*/

/**
 * @param {String} name
 * @param {Function} callback
 */
const greet = (name, callback) => {
  console.log(`Hello, ${name}!`);
  callback();
};

greet("Alice", () => {
  console.log("chào xong rồi đó");
});

// Mô hình client - server

/**
 *
 * @param {*} apiEnpoint
 * @param {*} callback
 */

// Sử dụng XMLHttpRequest (XHR) để thực hiện yêu cầu HTTP bất đồng bộ
// Lưu ý khi sử dụng XMLHttpRequest trong môi trường trình duyệt, bạn có thể gặp phải các hạn chế về bảo mật như CORS (Cross-Origin Resource Sharing) nếu bạn cố gắng truy cập tài nguyên từ một nguồn khác với nguồn của trang web hiện tại.
// Lưu ý khi sử dụng XMLHttpRequest trong môi trường Node.js, bạn sẽ cần sử dụng một thư viện bổ sung như 'xmlhttprequest' hoặc 'axios' vì XMLHttpRequest không được hỗ trợ trực tiếp trong Node.js. Vì thế đoạn code dưới đây chỉ chạy được trong trình duyệt.
const getListPokemon = (apiEnpoint, callback) => {
  const requestAPI = new XMLHttpRequest();
  requestAPI.open("GET", apiEnpoint);
  //   requestAPI.setRequestHeader("Cache-Control", "no-cache");
  requestAPI.onload = () => {
    // Nếu gọi API thành công
    if (requestAPI.status >= 200 && requestAPI.status < 300) {
      const data = JSON.parse(requestAPI.responseText);
      callback(null, data); // Gọi callback với dữ liệu khi thành công
    } else {
      callback(`Error: ${requestAPI.status}`); // Gọi callback với lỗi nếu có
    }
  };
  requestAPI.send();
};

getListPokemon("https://pokeapi.co/api/v2/pokemon", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Data: ", data);
  }
});

// Có 2 cơ chế chính mà browser và server dùng để “so sánh” file cũ với file mới
// 1. Cơ chế dựa trên Last-Modified / If-Modified-Since
// 2. Cơ chế dựa trên ETag / If-None-Match
// Khi nào dùng If-Modified-Since và khi nào dùng If-None-Match?
// Cơ chế dựa trên Last-Modified / If-Modified-Since
// Cơ chế này dựa trên thời gian chỉnh sửa cuối cùng của tài nguyên (Last-Modified).
// Khi trình duyệt gửi yêu cầu đến server, nó sẽ kèm theo header If-Modified-Since với giá trị là thời gian lần cuối cùng tài nguyên được chỉnh sửa.
// Server sẽ so sánh giá trị này với thời gian chỉnh sửa hiện tại của tài nguyên.
// Nếu tài nguyên không thay đổi kể từ thời gian đó, server sẽ trả về mã trạng thái 304 Not Modified, cho biết rằng trình duyệt có thể sử dụng phiên bản đã lưu trong bộ nhớ đệm.
// Nếu tài nguyên đã thay đổi, server sẽ trả về phiên bản mới cùng với mã trạng thái 200 OK.
// Cơ chế dựa trên ETag / If-None-Match
// Cơ chế này sử dụng một mã định danh duy nhất (ETag) để xác định phiên bản của tài nguyên.
// Khi trình duyệt gửi yêu cầu đến server, nó sẽ kèm theo header If-None-Match với giá trị là ETag của phiên bản tài nguyên mà nó đã lưu trong bộ nhớ đệm.
// Server sẽ so sánh giá trị này với ETag hiện tại của tài nguyên.
// Nếu ETag khớp, server sẽ trả về mã trạng thái 304 Not Modified.
// Nếu ETag không khớp, server sẽ trả về phiên bản mới cùng với mã trạng thái 200 OK.
// Tóm lại:
// ETag (If-None-Match) ưu tiên cao hơn so với Last-Modified (If-Modified-Since).
// ETag cung cấp một cách chính xác hơn để xác định xem tài nguyên có thay đổi hay không, trong khi Last-Modified dựa trên thời gian và có thể không phản ánh chính xác tất cả các thay đổi.

// Đối với cột name của network trong DevTools thì nó hiển thị tên file hoặc tên tài nguyên mà trình duyệt đang tải về. Nếu tài nguyên được tải từ bộ nhớ đệm (cache) của trình duyệt, nó sẽ hiển thị là (from disk cache) hoặc (from memory cache) thay vì tên file cụ thể. Điều này giúp người dùng hiểu rằng tài nguyên đã được lưu trữ tạm thời trên máy tính của họ và không cần phải tải lại từ server, giúp cải thiện hiệu suất tải trang web.
// Đặc biệt đối với api thì nó sẽ hiển thị tên api đó thay vì tên file cụ thể. Ví dụ, nếu bạn gọi một API như https://pokeapi.co/api/v2/pokemon, trong cột name của DevTools sẽ hiển thị pokemon thay vì tên file cụ thể. Điều này giúp người dùng dễ dàng nhận biết và phân biệt các yêu cầu API mà trình duyệt đang thực hiện.
// Và icon thể hiện khi gọi api thì nó sẽ hiển thị {:} thay vì icon file như các file css, js, png... dựa vào response header mà server trả về. Nếu response header có Content-Type là application/json hoặc text/xml thì DevTools sẽ hiển thị icon {:} để biểu thị rằng đây là một API trả về dữ liệu dạng JSON hoặc XML. Điều này giúp người dùng nhanh chóng nhận biết loại tài nguyên mà họ đang làm việc trong DevTools.

// Callback Hell: Callback Hell xuất hiện khi có chuỗi phụ thuộc bất đồng bộ
/* Giả sử bạn muốn:
1. Gọi API lấy danh sách Pokémon
2. Lấy URL của Pokémon đầu tiên
3. Gọi tiếp API chi tiết Pokémon đó
4. Sau đó ghi ra console tên của nó */
getListPokemon("https://pokeapi.co/api/v2/pokemon", (error, data) => {
  if (error) return console.error(error);

  const firstUrl = data.results[0].url;

  // Gọi API thứ hai — phụ thuộc vào kết quả của API thứ nhất - lấy url của pokemon đầu tiên
  getListPokemon(firstUrl, (error2, data2) => {
    if (error2) return console.error(error2);

    console.log("Pokemon đầu tiên là:", data2.name);

    // Gọi API thứ ba nữa — lại lồng callback - lấy thông tin species của pokemon đầu tiên
    getListPokemon(data2.species.url, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log("Thông tin species:", data3);
    });
  });
});
