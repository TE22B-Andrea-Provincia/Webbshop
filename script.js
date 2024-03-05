// Create an empty array to store the items in the cart
let cart = [];

// Add event listeners to "Add to cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add item to the cart
function addToCart(event) {
    const item = event.target.parentElement;
    const itemName = item.querySelector('h3').textContent;
    const itemPrice = parseFloat(item.querySelector('h4').textContent.replace('Price: ', '').replace('$', ''));
    
    const newItem = {
        name: itemName,
        price: itemPrice
    };

    cart.push(newItem);

    // Update the display of the shopping cart
    updateCartDisplay();
}

// Function to update the display of the shopping cart
function updateCartDisplay() {
    // For demonstration purposes, this simply logs the current items in the cart
    console.log('Cart:', cart);
}