// ======== ДАНІ ПРО ТОВАРИ ========

const popularProducts = [
  {
    name: "Квас Тарас Білий",
    price: 337,
    img: "img/white.png"
  },
  {
    name: "Яблуко зелене",
    price: 28,
    img: "img/apple.png"
  },
  {
    name: "Манго солодке",
    price: 85,
    img: "img/mango.png"
  }
];


// ======== РЕНДЕР ПОПУЛЯРНИХ ТОВАРІВ ========

const list = document.getElementById("popular-list");

popularProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "popular-card";

  card.innerHTML = `
    <img src="${product.img}" class="popular-image" alt="Product">
    <div class="product-name">${product.name}</div>
    <div class="product-price">${product.price} грн</div>
    <a class="popular-btn" href="order.html">Купити</a>
  `;

  list.appendChild(card);
});


// ======== ТЕМА (dark/light) ========

const toggleBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  toggleBtn.textContent = theme === "light" ? "Dark Theme" : "Light Theme";
}

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "light" ? "dark" : "light");
});

// Початковий стан
applyTheme(localStorage.getItem("theme") || "light");
