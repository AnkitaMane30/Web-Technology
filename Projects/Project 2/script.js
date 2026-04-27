// Menu Data
const menu = [
    { id: 1, name: "Paneer Butter Masala", category: "veg", price: 250 },
    { id: 2, name: "Chicken Biryani", category: "nonveg", price: 300 },
    { id: 3, name: "Cold Coffee", category: "drink", price: 50 },
    { id: 4, name: "Veg Pulao", category: "veg", price: 200 },
];

// Select container
const menuContainer = document.getElementById("menuContainer");

// Display menu items
function displayMenu(items) {
    menuContainer.innerHTML = "";

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;

        menuContainer.appendChild(div);
    });
}

// Filter function
function filterMenu(category) {
    if (category === "all") {
        displayMenu(menu);
    } else {
        const filtered = menu.filter(item => item.category === category);
        displayMenu(filtered);
    }
}

// Add to cart
function addToCart(id) {
    const selectedItem = menu.find(item => item.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(selectedItem);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").innerText = cart.length;
}

// Initial Load
displayMenu(menu);
updateCartCount();