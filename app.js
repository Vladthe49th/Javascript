// Getting elements
const nameInput = document.getElementById("productName");
const priceInput = document.getElementById("productPrice");
const addBtn = document.getElementById("addProduct");
const productList = document.getElementById("productList");

// ASYNC Load products
async function loadProducts() {
  const response = await fetch("products.json");
  const data = await response.json();
  renderProducts(data);
}





// Add product to DOM
function addProductToDOM(product) {
  const li = document.createElement("li");
  li.className = "product-item";
  li.textContent = `${product.name} — ${product.price} uah`;
  productList.appendChild(li);
}

// Save product to localStorage
function saveProduct(product) {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
}

// Event listener
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const price = priceInput.value.trim();

  if (!name || !price || isNaN(price)) {
    alert("Please, enter correct name and price!");
    return;
  }

  const product = { name, price: parseFloat(price) };
  saveProduct(product);
  addProductToDOM(product);

  nameInput.value = "";
  priceInput.value = "";
});

// Showing the state of our list
document.addEventListener("DOMContentLoaded", loadProducts);




// Making products for drinks
const drinks = [
  new Drink("Kvas Taras white, 2l", 337, "white"),
  new Drink("Kvas Taras black, 2l", 337, "black")
]

// Fruits
const fruits = [
  new Fruit("Green apple, 1kg", 60, "apple"),
  new Fruit("Mango, 1", 110, "mango")
];

//  Electronics
const electronics = [
  new Electronics("Electric kettle", 950, "kettle"),
  new Electronics(" LG SmartCool Fridge", 18800, "fridge")
];

// rendering cards
const container = document.getElementById("product-list");
drinks.forEach(drink => container.appendChild(drink.render()));
