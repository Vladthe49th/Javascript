class Fruit extends Product {
  constructor(name, price, imageClass) {
    super(name, price, imageClass, "Fruits");
  }

  // Render redefenition
  render() {
    const card = super.render();
    card.classList.add("fruit-card");
    return card;
  }
}
