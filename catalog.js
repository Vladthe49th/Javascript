const catalogEl = document.getElementById("catalog");
const categoryFilter = document.getElementById("category-filter");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const applyFiltersBtn = document.getElementById("apply-filters");
const themeToggle = document.getElementById("theme-toggle");

/* ---- Масив товарів ---- */
const products = [
  { name: "Білий квас", category: "drinks", price: 420, img: "img/white.png" },
  { name: "Чорний квас", category: "drinks", price: 420, img: "img/black.png" },
  { name: "Яблуко", category: "fruits", price: 25, img: "img/apple.png" },
  { name: "Манго", category: "fruits", price: 80, img: "img/mango.png" },
  { name: "Чайник", category: "electronics", price: 700, img: "img/kettle.png" },
  { name: "Холодильник", category: "electronics", price: 8500, img: "img/Fridge.png" },
  { name: "Плюшовий Голум", category: "toys", price: 150, img: "img/Plush.jpg" },
  { name: "MK1", category: "games", price: 1990, img: "img/game.jpg" }
];

/* ---- Функція рендера каталогу ---- */
function renderCatalog(list) {
  catalogEl.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
            <img src="${p.img}" alt="product">
            <h3>${p.name}</h3>
            <p class="price">${p.price} грн</p>
        `;

    catalogEl.appendChild(card);
  });
}

renderCatalog(products);

/* ---- Фільтри ---- */
applyFiltersBtn.addEventListener("click", () => {
  let filtered = [...products];

  // Категорія
  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  // Мінімальна ціна
  if (minPrice.value) {
    filtered = filtered.filter(p => p.price >= Number(minPrice.value));
  }

  // Максимальна ціна
  if (maxPrice.value) {
    filtered = filtered.filter(p => p.price <= Number(maxPrice.value));
  }

  renderCatalog(filtered);
});

/* ---- Зміна теми ---- */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent =
    document.body.classList.contains("dark") ? "Light mode" : "Dark mode";
});



card.addEventListener("click", () => {
  window.location.href = `product.html?id=${item.id}`;
});



function addToCart(product) {
  const cart = getCart();

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      img: product.images?.[0] || ""
    });
  }

  saveCart(cart);
  alert("Товар додано у кошик!");
}
