const cart = [];

function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    displayCart();
}

function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Кошик порожній</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} - ${item.price.toFixed(2)} $</span>
            <button onclick="removeFromCart(${index})">Видалити</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalElement = document.createElement('div');
    totalElement.className = 'total';
    totalElement.textContent = `Загальна сума: ${total.toFixed(2)} $`;
    cartContainer.appendChild(totalElement);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}