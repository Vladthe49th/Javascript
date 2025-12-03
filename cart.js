/* --- Отримання кошика із LocalStorage --- */
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

/* --- Збереження кошика --- */
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* --- Рендер кошика --- */
function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-container");
  const totalEl = document.getElementById("total-price");

  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Кошик порожній...</p>";
    totalEl.textContent = "0 грн";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const el = document.createElement("div");
    el.className = "cart-item";

    el.innerHTML = `
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>${item.price} грн</p>
      </div>

      <div class="cart-controls">
        <button data-index="${index}" class="minus">-</button>
        <span>${item.quantity}</span>
        <button data-index="${index}" class="plus">+</button>
      </div>

      <button class="remove-btn" data-index="${index}">X</button>
    `;

    container.appendChild(el);
  });

  totalEl.textContent = total + " грн";

  addEventListeners();
}

/* --- Додаємо кнопки + - та видалення --- */
function addEventListeners() {
  document.querySelectorAll(".minus").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      const cart = getCart();

      if (cart[index].quantity > 1) cart[index].quantity--;
      saveCart(cart);
      renderCart();
    });
  });

  document.querySelectorAll(".plus").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      const cart = getCart();

      cart[index].quantity++;
      saveCart(cart);
      renderCart();
    });
  });

  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      const cart = getCart();

      cart.splice(index, 1);
      saveCart(cart);
      renderCart();
    });
  });

  document.getElementById("checkout-btn").onclick = () => {
    window.location.href = "order.html";
  };
}

/* --- Запуск --- */
renderCart();
