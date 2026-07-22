//Shopping cart
let shoppingCart = [];
//Discount and tax variables
let Declare_discount_tax = {}

//Add Item function
function addItem(id, price, quantity){
    //VALIDATION
    //Validate id
    if (typeof id !== 'string' || id === ''){
        console.log("ERROR: id product is invalid ");
        return;
    }

    //Validate price
    if (typeof price !== 'number' || price < 0) {
        console.log("ERROR: price is invalid ");
        return;
    }

    //Validate quatity
    if (typeof quantity !== 'number' || quantity <0 || !Number.isInteger(quantity)) {
        console.log("ERROR: quantity is invalid ");
        return;
    }

    //Create object
    let item = {
        productID: id,
        itemPrice: price,
        itemQuantity: quantity
    };

    shoppingCart.push(item);
    console.log("ADDED: " + id + " ,quantity: " + quantity );
}

function showCart(){
    console.log("Shopping Cart: ");
    for (let i = 0; i < shoppingCart.length; i++){
        let item = shoppingCart[i];
        console.log("ID: " + item.productID + ", Price: " + item.itemPrice + ", Quantity: " + item.itemQuantity);
    }
}

function calculateTotal(){
    let total = 0;
    declare_discount_tax(18,0,0);
    let discountPercent = Declare_discount_tax.discountPercent; 
    let discountValue = Declare_discount_tax.discountValue;
    let taxRate = Declare_discount_tax.taxRate; 

    for (let i = 0; i < shoppingCart.length; i++){
        let item = shoppingCart[i];
        total += item.itemPrice * item.itemQuantity;
    }

    //discount
    let discountAmount = total * discountPercent/100 + discountValue;
    
    //tax
    let taxAmount = (total - discountAmount) * taxRate/100;

    //final total
    total = total - discountAmount + taxAmount;

    return total;
}

function declare_discount_tax(discountPercent = 10, discountValue = 5, taxRate = 5){
    if (discountPercent < 0 || discountPercent > 100) {
        console.log("ERROR: discountPercent is invalid");
        return;
    }

    if (discountValue < 0) {
        console.log("ERROR: discountValue is invalid");
        return;
    }

    if (taxRate < 0 || taxRate > 100) {
        console.log("ERROR: taxRate is invalid");
        return;
    }

    Declare_discount_tax = {
        discountPercent: discountPercent,
        discountValue: discountValue,
        taxRate: taxRate
    };

    console.log("Discount: " + discountPercent + "% - " + discountValue);
    console.log("Tax: " + taxRate + "%");
}

//Test
console.log("--TEST ADD ITEM--");
//Validate input
addItem("", 100, 2);           // Lỗi: id empty
addItem("Ban Phim", -50, 1);   // Lỗi: price < 0
addItem("Chuot", 20, 1.5);     // Lỗi: quantity is float

//Add valid items
addItem("Laptop Dell", 1000, 1);
addItem("Tai nghe", 50, 2);

showCart(); // show cart after validation errors
console.log("Total: " + calculateTotal());
