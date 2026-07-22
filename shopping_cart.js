// Shopping cart
let shoppingCart = [];

// ==========================================
// 0. GENERATE UNIQUE ID FUNCTION
// ==========================================
function generateUniqueId() {
    // Kết hợp thời gian hiện tại (Date.now) và một chuỗi ngẫu nhiên (Math.random)
    // Cách này đảm bảo ID gần như không bao giờ bị trùng lặp
    return 'DEV_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
}

// ==========================================
// 1. ADD ITEM FUNCTION
// ==========================================
function addItem(deviceName, price, quantity){
    // VALIDATION
    if (typeof deviceName !== 'string' || deviceName === ''){
        console.log("ERROR: device name is invalid ");
        return;
    }
    if (typeof price !== 'number' || price < 0) {
        console.log("ERROR: price is invalid ");
        return;
    }
    if (typeof quantity !== 'number' || quantity < 0 || !Number.isInteger(quantity)) {
        console.log("ERROR: quantity is invalid ");
        return;
    }

    // Create object
    let item = {
        productID: generateUniqueId(),
        deviceName: deviceName,
        itemPrice: price,
        itemQuantity: quantity
    };

    shoppingCart.push(item);
    console.log("ADDED: " + item.deviceName + ", quantity: " + item.itemQuantity + ", price: " + item.itemPrice + "$, ID: " + item.productID);
}

// ==========================================
// 2. SHOW CART FUNCTION
// ==========================================
function showCart(){
    console.log("\n--- Shopping Cart ---");
    for (let i = 0; i < shoppingCart.length; i++){
        let item = shoppingCart[i];
        console.log("ID: " + item.productID + ", Device: " + item.deviceName + ", Price: " + item.itemPrice + "$, Quantity: " + item.itemQuantity);
    }
    console.log("---------------------");
}

// ==========================================
// 3. CALCULATE TOTAL FUNCTION (Đã nâng cấp)
// ==========================================
// Truyền trực tiếp tham số vào hàm kèm giá trị mặc định
function calculateTotal(discountPercent = 10, discountValue = 5, taxRate = 5) {
    
    // 3.1. Chuyển phần Validation xuống thẳng đây
    if (discountPercent < 0 || discountPercent > 100) {
        console.log("ERROR: discountPercent is invalid");
        return NaN; // Trả về NaN để báo lỗi tính toán
    }
    if (discountValue < 0) {
        console.log("ERROR: discountValue is invalid");
        return NaN;
    }
    if (taxRate < 0 || taxRate > 100) {
        console.log("ERROR: taxRate is invalid");
        return NaN;
    }

    let subTotal = 0;

    // 3.2. Tính tổng tiền hàng (Subtotal)
    for (let i = 0; i < shoppingCart.length; i++){
        let item = shoppingCart[i];
        subTotal += item.itemPrice * item.itemQuantity;
    }

    // 3.3. Tính chiết khấu
    let discountAmount = (subTotal * discountPercent / 100) + discountValue;
    
    // (Tùy chọn) Đảm bảo tiền giảm không lớn hơn tổng tiền hàng
    if (discountAmount > subTotal) {
        discountAmount = subTotal;
    }
    
    // 3.4. Tính thuế (Dựa trên số tiền sau khi đã trừ chiết khấu)
    let taxAmount = (subTotal - discountAmount) * taxRate / 100;

    // 3.5. Tính tổng cuối cùng
    let finalTotal = subTotal - discountAmount + taxAmount;

    // In chi tiết ra console cho dễ nhìn
    console.log(`Subtotal: ${subTotal}$`);
    console.log(`Discount (${discountPercent}% + ${discountValue}$): -${discountAmount}$`);
    console.log(`Tax (${taxRate}%): +${taxAmount}$`);
    
    return finalTotal;
}

// ==========================================
// TEST SCENARIOS
// ==========================================
console.log("-- TEST ADD ITEM --");
// Validate input errors
addItem("", 100, 2);           
addItem("Ban Phim", -50, 1);   
addItem("Chuot", 20, 1.5);     

// Add valid items
addItem("Laptop Dell", 1000, 1);
addItem("Tai nghe", 50, 2);

showCart();

console.log("\n-- TEST CALCULATE TOTAL --");

console.log("\nKịch bản 1: Sử dụng cấu hình Mặc định (Giảm 10% + 5$, Thuế 5%)");
let total1 = calculateTotal();
console.log("=> TỔNG THANH TOÁN KỊCH BẢN 1: " + total1 + "$");

console.log("\nKịch bản 2: Không giảm giá, Không trừ thẳng, Thuế 10%");
let total2 = calculateTotal(0, 0, 10);
console.log("=> TỔNG THANH TOÁN KỊCH BẢN 2: " + total2 + "$");

console.log("\nKịch bản 3: Test lỗi (Truyền sai % thuế)");
let total3 = calculateTotal(10, 5, 200); 
console.log("=> TỔNG THANH TOÁN KỊCH BẢN 3: " + total3);