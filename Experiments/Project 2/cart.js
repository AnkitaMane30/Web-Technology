const cartContainer = document.getElementById("cartContainer");

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h3 style='text-align:center;'>Cart is Empty</h3>";
        document.getElementById("total").innerText = 0;
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartContainer.appendChild(div);
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

loadCart();