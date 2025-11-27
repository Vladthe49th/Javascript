async function displayAdvice() {
  const input = document.getElementById("user-input").value.toLowerCase();
  const container = document.getElementById("advice-container");

  container.textContent = "Завантаження...";

  // Наша штучна таблиця ключових слів → ID порад
  const topicMap = {
    love: 36,
    life: 25,
    money: 4,
    work: 12,
    time: 83,
    health: 30,
    happiness: 20,
    success: 17
  };

  // Витягуємо слова з тексту
  const words = input.split(/[\s,.;!?]+/);

  // Знаходимо перше слово, що має відповідний advice ID
  let adviceId = null;
  for (let w of words) {
    if (topicMap[w]) {
      adviceId = topicMap[w];
      break;
    }
  }

  // Якщо немає теми — покажемо випадкову пораду
  const url = adviceId
    ? `https://api.adviceslip.com/advice/${adviceId}`
    : `https://api.adviceslip.com/advice`;

  try {
    const response = await fetch(url, {
      cache: "no-cache"   // щоб не кешував старі поради
    });

    if (!response.ok) {
      throw new Error("Помилка HTTP: " + response.status);
    }

    const data = await response.json();
    container.textContent = data.slip.advice;

  } catch (error) {
    container.textContent = "Сталася помилка: " + error.message;
  }
}
