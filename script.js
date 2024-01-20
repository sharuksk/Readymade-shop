let cartItems = [];
let total = 0;

function addToCart(product) {
    cartItems.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartList.innerHTML = "";
    total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartList.appendChild(listItem);

        // For simplicity, assuming each item costs $10
        total += 10;
    });

    totalElement.textContent = total.toFixed(2);
}
