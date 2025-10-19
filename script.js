const products = [
  { id: 1, name: "Pen", price: 20 },
  { id: 2, name: "Notebook", price: 50 },
  { id: 3, name: "Pencil", price: 10 },
  { id: 4, name: "Eraser", price: 5 },
];

const productContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

let cart = [];

function renderProducts() {
  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalDisplay.textContent = `Total: ₹${total}`;
}

renderProducts();
