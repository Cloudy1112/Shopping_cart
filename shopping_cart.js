//Shopping cart
let shoppingCart = [];

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
    console.log("ADDED: " + id + " quantity: " + quantity );
}

//Test
console.log("--TEST ADD ITEM--");
//Validate input
addItem("", 100, 2);           // Lỗi: id empty
addItem("Ban Phim", -50, 1);   // Lỗi: price < 0
addItem("Chuot", 20, 1.5);     // Lỗi: quantity is float

