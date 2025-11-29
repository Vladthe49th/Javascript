async function displayAdvice() {
  const input = document.getElementById("user-input").value.toLowerCase();
  const container = document.getElementById("advice-container");

  container.textContent = "Loading...";


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


  const words = input.split(/[\s,.;!?]+/);

  let adviceId = null;
  for (let w of words) {
    if (topicMap[w]) {
      adviceId = topicMap[w];
      break;
    }
  }


  const url = adviceId
    ? `https://api.adviceslip.com/advice/${adviceId}`
    : `https://api.adviceslip.com/advice`;

  try {
    const response = await fetch(url, {
      cache: "no-cache"   
    });

    if (!response.ok) {
      throw new Error("Помилка HTTP: " + response.status);
    }

    const data = await response.json();
    container.textContent = data.slip.advice;

  } catch (error) {
    container.textContent = "An error happened: " + error.message;
  }
}
