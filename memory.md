## Primitive values

- Trong JS, primitive values (number, string, boolean, null, undefined, symbol, bigint) → lưu trực tiếp trong stack (ngăn xếp, vùng nhớ nhanh).

## Objects & Arrays

- Objects & Arrays → không lưu trực tiếp giá trị trong stack, mà stack chỉ lưu một reference (con trỏ) đến vùng nhớ trong heap (bộ nhớ động).

## Khi console.log được gọi

- Khi bạn log 1 primitive, DevTools chỉ hiển thị giá trị (vì primitive không thay đổi).
- Khi bạn log 1 object/array/function, DevTools nhận được reference (con trỏ) đến vùng nhớ trong heap.
- 👉 Vì vậy, DevTools có thể “expand” để đọc dữ liệu mới nhất từ heap (chứ không phải chỉ snapshot giá trị lúc log).

## Tại sao có preview (3) ['Hoai', 'Nam', 'Tuan']?

- DevTools khi in ra thì render một bản snapshot nhỏ ngay lúc log (để bạn có cái nhìn nhanh).
- Nhưng object/array vẫn được lưu bằng reference, nên khi bạn mở ra chi tiết (expand), nó sẽ lấy dữ liệu mới nhất từ heap.

## Lưu ở đâu??

- Stack: Lưu biến local, con trỏ tới object.
- Heap: Lưu object/array/function thực sự.
- DevTools: Giữ một reference (chứ không copy) đến object trong heap.

## EX:

let students2 = ["Hoai", "Nam", "Tuan"];
console.log(students2);  
students2.push("Em");

Quá trình:

- students2 (stack) → trỏ đến [ "Hoai", "Nam", "Tuan" ] (heap).
- console.log(students2) → DevTools nhận được reference đến mảng trong heap.
- Sau khi push("Em"), heap thay đổi → DevTools khi expand vẫn thấy "Em".

## Muốn snapshot ngay lúc log thì sao?

Nếu bạn muốn DevTools không dính reference mà chỉ giữ giá trị copy:

- console.log([...students2]); // clone array (shallow copy)
- console.log(JSON.parse(JSON.stringify(students2))); // deep copy

## Stack/Heap có được bao bọc bởi JS Engine không?

✅ Có.

- JS engine (ví dụ: V8 của Chrome, Node.js, Deno) chính là chương trình quản lý bộ nhớ (RAM) và thực thi code JS.
- Khi engine chạy:
  - Nó cấp phát stack và heap trong RAM.
  - Nó theo dõi reference, dọn rác (garbage collection).
  - Nó quyết định khi nào object hết dùng để giải phóng bộ nhớ heap.
- Vậy nên: Stack/Heap nằm bên trong phạm vi quản lý của engine.

## Chrome liên quan gì?

- Chrome là một trình duyệt web. Trong Chrome có:
  - Blink (render engine): vẽ HTML, CSS, UI.
  - V8 (JavaScript engine): chạy JS, quản lý stack/heap, GC.
- Mỗi tab Chrome chạy như một process riêng biệt (isolation). Khi bạn mở 5 tab có JS, thì sẽ có 5 engine V8 chạy song song, mỗi cái có stack/heap riêng trong RAM.
  👉 Nói ngắn gọn: JS engine (V8) chính là “chương trình ngầm” mà Chrome dùng để chạy JavaScript local trên máy bạn.

## Khi bạn truy cập website có JS (host ở cloud) thì sao?

- Server chỉ gửi file .js (text) về cho trình duyệt.
- Sau đó, trình duyệt của bạn (Chrome, Firefox, Safari...) sẽ dùng JS engine cục bộ (local) để parse → compile → chạy code JS.
- Toàn bộ stack, heap, RAM tiêu tốn đều nằm ở máy bạn, không phải ở server.
  👉 Vì thế khi bạn mở web phức tạp (Facebook, Gmail, Figma...), máy bạn sẽ thấy RAM tăng mạnh, là do engine chạy JS + DOM + render.
  Server cloud chỉ cung cấp file, không chạy code JS cho bạn.

## Có thể "nhìn thấy" hoặc monitor JS engine không?

Trực tiếp nhìn stack/heap thô thì không (vì nó nằm bên trong RAM, do V8 quản lý). Nhưng bạn có công cụ DevTools trong Chrome để monitor:

- Memory tab:

  - Có thể chụp heap snapshot → xem object nào đang sống trong heap.
  - Track memory leak (rò rỉ bộ nhớ).

- Performance tab:

  - Xem call stack khi JS chạy.
  - Biết function nào tốn nhiều CPU.

- Task Manager của Chrome (Shift + Esc):

  - Mỗi tab là 1 process, bạn thấy RAM/CPU tiêu tốn.

- Node.js thì dùng --inspect + Chrome DevTools hoặc clinic.js để monitor heap/GC.

## Tóm tắt luồng hoạt động

1. Bạn truy cập web → nhận về file .js.
2. Chrome giao cho V8 (engine) chạy file đó.
3. V8 cấp phát stack/heap trong RAM máy bạn.
4. Code JS chạy, object lưu trong heap, biến primitive lưu trong stack.
5. DevTools cho bạn "cửa sổ nhìn vào" một phần heap/stack qua console log và Memory profiler.
