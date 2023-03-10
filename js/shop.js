// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i=0; i<=products.length; i++){
        if (id == i+1) {
            cartList.push(products[i])
        }
    }
    generateCart();
    applyPromotionsCart();
    calculateTotal();
}
    

// Exercise 2
function cleanCart() {
    cartList = []
    cart = []
    total = 0
    table = document.getElementById("cart_list");
    table.innerHTML =""
    document.getElementById("total_price").innerHTML = total
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total=0
    for (i=0;i<cart.length;i++){
        total += cart[i].sumprice
    }
    document.getElementById("total_price").innerHTML = total
    
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let aux = false
    for(let j = 0; j<cart.length;j++){
        if(cart[j].id==cartList[cartList.length-1].id){
            cart[j].quantity=cart[j].quantity+1
            aux = true
        }
     }
     if (aux == false){
        cart[cart.length]=cartList[cartList.length-1]
        cart[cart.length-1].quantity=1
     }
    
    
}




// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
    for(let i=0; i<cart.length; i++){
        if(cart[i].hasOwnProperty("offer")==true){
         if(cart[i].offer.number<=cart[i].quantity) {
            cart[i].sumprice = (cart[i].price*cart[i].quantity)-(cart[i].price*cart[i].quantity*20/100)
         }else{
            cart[i].sumprice = (cart[i].price*cart[i].quantity)
         }   
        }else{
            cart[i].sumprice = (cart[i].price*cart[i].quantity)
        }
    }
      
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
   
    
      table = document.getElementById("cart_list");
   table.innerHTML =""
   for(let i=0 ; i<cart.length;i++){
   var row = table.insertRow(0);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   cell1.innerHTML = cart[i].name;
   cell2.innerHTML = cart[i].price
   cell3.innerHTML = cart[i].quantity
   cell4.innerHTML = cart[i].sumprice
   }
    
    }
    
        
    
   

        
        
        

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
    
    
    
}