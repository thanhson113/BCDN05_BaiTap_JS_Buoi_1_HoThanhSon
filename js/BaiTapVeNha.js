/**
 * Bài 3: Quy đổi tiền
 * 
 * Khối 1: Input
 * usdCoin, vndCoin
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo biến và gán giá trị
 * B2: Lập công thức quy đổi tiền
 *      coinChange = usdCoin * vndCoin
 * 
 * Khối 3: Output
 * coinChange
 * 
 */
var usdCoin = 2;
var vndCoin = 23500;
var coinChange = usdCoin * vndCoin;
console.log('Số tiền sau khi quy đổi sang VND là: '+ new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(coinChange)+ ' VND');

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 * Khối 1: Input
 * widthRectangle , longRectangle 
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo biến và gán giá trị
 * B2: Lập công thức tính chu vi và diện tích hình chữ nhật
 *      perRectangle = (widthRectangle + longRectangle) * 2
 *      ereaRectangle = widthRectangle *  longRectangle
 * 
 * Khối 3: Output
 * perRectangle 
 * ereaRectangle 
 * 
 */
var widthRectangle = 5;
var longRectangle = 20;
var perRectangle = (widthRectangle + longRectangle) * 2;
var ereaRectangle = widthRectangle *  longRectangle
console.log("Chu vi hình chữ nhật là: "+ perRectangle);
console.log("Diện tích hình chữ nhật là: "+ ereaRectangle);


/**
 * Bài 5: Tính tổng 2 kí số
 * 
 * Khối 1: Input
 * number, ten, unit
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo biến và gán giá trị
 * B2: Lập công thức 
 *      ten = number / 10
 *      unit = number % 10
 * 
 * Khối 3: Output
 * sumNumber
 * 
 */
var number = 83;
var ten = Math.floor(number / 10);
var unit = number % 10;
var sumNumber = ten + unit;
console.log("Tổng của 2 kí số vừa nhập là: "+sumNumber);

