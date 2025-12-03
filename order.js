const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const quantityEl = document.getElementById('quantity');
const totalPriceEl = document.getElementById('total-price');
const promoCheckbox = document.getElementById('use-promo');
const promoContainer = document.getElementById('promo-container');
const applyPromoBtn = document.getElementById('apply-promo');
const submitBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');

let quantity = 1;
let pricePerItem = 420;
let promoApplied = false;

function updateTotal() {
  totalPriceEl.textContent = (quantity * pricePerItem).toFixed(2);
}

// ASYNC Promo func
async function validatePromoAsync(code) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(code === "AFRICANGOAT");
    }, 1500);
  });
}

// ASYNC Order sumbit
async function submitOrderAsync(orderData) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: "Успіх!",
        message: "Ваш заказ прийнятий!",
        orderId: Math.floor(Math.random() * 90000 + 10000)
      });
    }, 2000);
  });
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

// ASYNC Promo usage
applyPromoBtn.addEventListener('click', async () => {
  const promoCode = document.getElementById('promo-code').value.trim();

  applyPromoBtn.disabled = true;
  applyPromoBtn.textContent = "Перевірка...";

  const isValid = await validatePromoAsync(promoCode);

  applyPromoBtn.disabled = false;
  applyPromoBtn.textContent = "Використати";

  if (isValid) {
    pricePerItem = 420 * 0.9;
    promoApplied = true;
    updateTotal();
    alert("Вітаю, вам знижка на 10%!");
  } else {
    alert("Неправильний промо!");
  }
});


submitBtn.addEventListener('click', async () => {
  const name = document.getElementById('user-name').value.trim();
  const phone = document.getElementById('user-phone').value.trim();

  const phonePattern = /^\+380\d{9}$/;

  if (!name) {
    alert("Напишіть своє ім'я!");
    return;
  }
  if (!phonePattern.test(phone)) {
    alert("Введіть номер телефону!");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Перевірка ...";

  const orderData = {
    name,
    phone,
    quantity,
    total: (quantity * pricePerItem).toFixed(2),
    promoApplied
  };

  const response = await submitOrderAsync(orderData);

  submitBtn.disabled = false;
  submitBtn.textContent = "Заказати!";

  if (response.status === "success") {
    alert(`Дякуємо, ${name}! Важ заказ прийнятий! Його номер: ${response.orderId}`);

    console.log("ВІДПОВІДЬ СЕРВЕРА:", response);
    console.log("ЗАКАЗ:", orderData);
  }
});

cancelBtn.addEventListener('click', () => {
  alert("Заказ відмінено!");
});


submitBtn.addEventListener('click', () => {
  const name = document.getElementById('user-name').value.trim();
  const phone = document.getElementById('user-phone').value.trim();

  const phonePattern = /^\+380\d{9}$/;

  if (!name) {
    alert("І справжнє ім'я!");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert("І справжнє!!!");
    return;
  }


  window.location.href = "success.html";
});
