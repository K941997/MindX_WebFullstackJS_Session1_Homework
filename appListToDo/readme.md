# Bài 1 - Session 1: Cách kiểm tra một biến x cho trước là function, array, number, string, undefined:
1. Strings:
- Dùng typeof: 
    let x = 'This is a string';
    console.log(typeof x); //-> "string"    
- Trường hợp đặc biệt phải dùng đến instanceof và typeof:
    const message = new String('This will not work');
    console.log(typeof message); //=> "object" => false
    const isString = value => typeof value === 'string' || value instanceof String;
    console.log(isString(message)); //=> true => "String"

2. Null and undefined:
- Không dùng typeof:
    console.log(typeof undefined); //=> "undefined"
    console.log(typeof null); //=> "object"
- Dùng toán tử đẳng thức nghiêm ngặt (===) hoặc trừu tượng (==):
    if(a === undefined) {}
    if(a === null) {}
    console.log(null == ''); //=> false
    console.log(null == NaN); //=> false
    console.log(null == 0); //=> false
    console.log(undefined == ''); //=> false
    console.log(undefined == NaN); //=> false
    console.log(undefined == 0); //=> false

3. Arrays:
- Nếu dùng typeof sẽ ra "object"
- Dùng isArray:
    Array.isArray(someVar);
    Array.isArray([11, 22, 33]); //=> true
    Array.isArray({}); //=> false

4. Function:
- Dùng typeof:
    const f = function() {};
    console.log(typeof f === 'function'); //=> true

5. Objects:
- Dùng phép so sánh:
    const a = {};
    console.log(a === Object(a)); //=> true

    const b = [];
    console.log(b === Object(b)); //=> true

    const c = function() {};
    console.log(c === Object(c)); //=> true

    const d = 123;
    console.log(d === Object(d)); //=> false

    const e = '';
    console.log(e === Object(e)); //=> false

6. Numbers and Booleans:
- Sử dụng typeof hoặc kết hợp typeof và instanceof nếu đặc biệt:
    if (typeof a === 'string') {}
    if (typeof b === 'boolean') {}
    const isBoolean = value => typeof value === 'boolean' || value instanceof Boolean;
    const isNumber = value => typeof value === 'number' || value instanceof Number;

7. NaN, Infinity and -Infinity:
- Dùng hàm dựng sẵn:
    if (isNaN(value)) {} // Checks if value is NaN
    if (!isFinite(value)) {} // Checks if value is Infinity or -Infinity


# Bài 2 - Session 1: Tìm hiểu về Event Loop, giải thích tại sao đoạn code sau chữ Một lại hiện sau chữ Hai:
    setTimeout(function() {
        console.log('Một');
    }, 0);

    function second() {
        console.log('Hai');
    }
    second();

1. Về bản chất, vòng lặp sự kiện(event loop) sẽ kiểm tra xem ngăn xếp(call stack) cuộc gọi có trống không và nếu có, sẽ xem xét hàng đợi sự kiện (event queue).
- Nếu có một cái gì đó trong nó, nó sẽ thêm vào ngăn xếp(call stack) cuộc gọi và thực hiện nó. 
- Vòng lặp sự kiện(event loop) liên tục chạy cho đến khi hết ca (nội dung trình duyệt được tải / trình duyệt bị đóng)
- Event table theo dõi tất cả các sự kiện đã được kích hoạt và gửi chúng đến hàng đợi sự kiện(event queue) sẽ được thực thi. 
-> Event Loop có một công việc đơn giản: theo dõi Call Stack và Callback Queue (hàng đợi các hàm callback). Nếu Call Stack đang trống, nó sẽ lấy event đầu tiên từ trong hàng đợi ra và đẩy nó vảo trong Call Stack - tức là thực thi nó.

2. Tham số thứ 2 của setTimeOut() không có nghĩa là callback sẽ được chạy sau 0 ms, nó có nghĩa rằng callback sẽ được chạy sau sớm nhất là 0 ms 
-> Chương trình sẽ chạy second() trước, rồi mới chạy callback, và callback ở setTimeout sẽ chạy sau sớm nhất là 0ms khi chạy xong các cái trên, gọi setTimeout với thời gian là 0 chỉ vì mục đích hoãn callback lại cho tới khi Call Stack rỗng hoàn toàn.


# Bài 3 - Session 1: Tìm hiểu về deep copy và shallow copy trong JS. Giải thích kết quả của đoạn code sau:
    const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
    const apples = [...macbooks];
    apples[0] = 'air';
    apples[1].model = 'm1';
    console.log(macbooks) //=> ['macbook2015', { model: 'm1' }, 'macbook2017']
    console.log(apples) //=> ['air', { model: 'm1' }, 'macbook2017']

- Deep Copy: là tạo mới một biến có cùng giá trị và được cắt đứt quan hệ hoàn toàn với biến được copy
- Shallow Copy: có ý nghĩa rằng sau khi copy, biến mới hoặc các thành phần của biến mới vẫn còn quan hệ dây mơ rễ má với biến ban đầu

- apples ở đây đang là Shallow Copy của macbooks vì rơi vào bẫy dữ liệu tổng hợp Object lồng trong Array
- Cách giải quyết là:
    const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
    const apples = [...JSON.parse(JSON.stringify(macbooks))];
    apples[0] = 'air';
    apples[1].model = 'm1';

    console.log(macbooks) //=> ['macbook2015', { model: 'macbook2014' }, 'macbook2017']
    console.log(apples) //=> ['air', { model: 'm1' }, 'macbook2017']


