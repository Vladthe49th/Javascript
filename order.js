const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const quantityEl = document.getElementById('quantity');
const totalPriceEl = document.getElementById('total-price');
const promoCheckbox = document.getElementById('use-promo');
const promoContainer = document.getElementById('promo-container');
const applyPromoBtn = document.getElementById('apply-promo');
const submitBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');

let quantity = 2;
let pricePerItem = 420;
let promoApplied = false;

function updateTotal() {
  totalPriceEl.textContent = quantity * pricePerItem;
}

minusBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityEl.textContent = quantity;
    updateTotal();
  }
});

plusBtn.addEventListener('click', () => {
  quantity++;
  quantityEl.textContent = quantity;
  updateTotal();
});

promoCheckbox.addEventListener('change', () => {
  promoContainer.classList.toggle('hidden', !promoCheckbox.checked);
});

applyPromoBtn.addEventListener('click', () => {
  const promoCode = document.getElementById('promo-code').value.trim();
  if (promoCode === "SALE10") {
    pricePerItem = 420 * 0.9;
    promoApplied = true;
    updateTotal();
    alert("Promo used!10% Discount!");
  } else {
    alert("Wrong promo!");
  }
});

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('user-name').value.trim();
  const phone = document.getElementById('user-phone').value.trim();

  const phonePattern = /^\+380\d{9}$/;

  if (!name) {
    alert("Please enter a valid name!");
    return;
  }
  if (!phonePattern.test(phone)) {
    alert("Enter a valid phone number!");
    return;
  }

  alert(`Thanks, ${name}! Your order is accepted!`);
  console.log({
    name,
    phone,
    quantity,
    total: quantity * pricePerItem,
    promoApplied
  });
});

cancelBtn.addEventListener('click', () => {
  alert("Order cancelled!");
});
