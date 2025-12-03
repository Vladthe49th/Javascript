const nameEl = document.getElementById("product-name");
const titleEl = document.getElementById("product-title");
const priceEl = document.getElementById("product-price");
const descEl = document.getElementById("product-desc");
const mainImg = document.getElementById("main-img");
const thumbnails = document.querySelectorAll(".thumb");
const buyNowBtn = document.getElementById("buy-now");
const addToCartBtn = document.getElementById("add-to-cart");
const themeToggle = document.getElementById("theme-toggle");

/* ---- Тимчасова база товарів ---- */
const products = [
  {
    id: 1,
    name: "Білий квас",
    price: 420,
    desc: "Освіжаючий білий квас традиційного приготування.",
    images: ["img/white.png", "img/anotherwhite.png", ""]
  },
  {
    id: 2,
    name: "Чорний квас",
    price: 420,
    desc: "Класичний чорний квас з густим смаком.",
    images: ["", "", ""]
  },
  {
    id: 3,
    name: "Манго",
    price: 80,
    desc: "Соковите стигле манго з Таїланду.",
    images: ["", "", ""]
  },
  {
    id: 4,
    name: "Чайник",
    price: 700,
    desc: "Потужний електрочайник на 1.7 літра.",
    images: ["", "", ""]
  }
];

/* ---- Отримання ID з URL ---- */
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id")) || 1;

/* ---- Завантаження даних ---- */
function loadProduct() {
  const p = products.find(x => x.id === productId);

  if (!p) {
    nameEl.textContent = "Товар не знайдено!";
    return;
  }

  nameEl.textContent = p.name;
  titleEl.textContent = p.name;
  priceEl.textContent = `${p.price} грн`;
  descEl.textContent = p.desc;

  mainImg.src = p.images[0];

  thumbnails.forEach((t, i) => {
    t.src = p.images[i] || "";
    t.addEventListener("click", () => {
      mainImg.src = t.src;
    });
  });
}

loadProduct();

/* ---- Кнопки ---- */
buyNowBtn.addEventListener("click", () => {
  alert("Оформлення замовлення...");
  window.location.href = "order.html";
});

addToCartBtn.addEventListener("click", () => {
  alert("Товар додано в кошик!");
});

/* ---- Темна тема ---- */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "Light mode"
      : "Dark mode";
});
