class Product {
  constructor(name, price, imageClass, category) {
    this.name = name;
    this.price = price;
    this.imageClass = imageClass;
    this.category = category;
  }

  render() {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image ${this.imageClass}"></div>
      <div class="product-name">${this.name}</div>
      <div class="product-price">${this.price} ₴</div>

      <div class="product-buttons">
        <button class="icon-btn like-btn" onclick="toggleIcon(this, 'like')">
          <img src="img/211754_heart_icon.png" alt="like">
        </button>
        <button class="icon-btn buy-btn" onclick="toggleIcon(this, 'buy')">
          <img src="img/9026048_shopping_cart_simple_icon.png" alt="buy">
        </button>
      </div>

      <div class="shop-logo">DUMB</div>
    `;
    return card;
  }
}

// Icon function
function toggleIcon(button, type) {
  const img = button.querySelector("img");
  const active = button.classList.toggle("active");

  if (type === "like") {
    img.src = active
      ? "img/211755_heart_icon.png"
      : "img/211754_heart_icon.png";
  } else if (type === "buy") {
    img.src = active
      ? "img/326700_cart_shopping_icon.png"
      : "img/9026048_shopping_cart_simple_icon.png";
  }
}
