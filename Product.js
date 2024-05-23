const product = [
    {
        id: 0,
        images: "Images/Black.jpg",
        title: 'IPhone 13 Pro Max Slim Black Case',
        price: 200,
    },
    {
        id: 1,
        images: "Images/White.jpg",
        title: 'IPhone 13 Pro Max Slim White Case',
        price: 150,
    },
    {
        id: 2,
        images: "Images/Green.jpg",
        title: 'IPhone 13 Pro Max Slim Green Case',
        price: 200,
    },
    {
        id: 3,
        images: "Images/Purple.jpg",
        title: 'IPhone 13 Pro Max Slim Purple Case',
        price: 200,
    }
];


document.getElementById('root').innerHTML = product.map((item, index) => {
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${item.image}'></img>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>P ${item.price}.00</h2>
                <button onclick='addtocart(${index})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

let cart = [];

function addtocart(index) {
    cart.push(product[index]);
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    const cartItem = document.getElementById("cartItem");
    const countElement = document.getElementById("count");
    const totalElement = document.getElementById("total");
    
    countElement.innerHTML = cart.length;
    
    if (cart.length === 0) {
        cartItem.innerHTML = "Your cart is empty";
        totalElement.innerHTML = "P 0.00";
    } else {
        cartItem.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${item.image}'>
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>P ${item.price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
        totalElement.innerHTML = `P ${total}.00`;
    }
}

function purchaseItems() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before proceeding.");
    } else {
        let confirmation = confirm("Are you sure you want to purchase these items?");
        if (confirmation) {
            alert("Thank you! See you again :)");
            // Clear the cart
            cart = [];
            displaycart();
        }
    }
}
