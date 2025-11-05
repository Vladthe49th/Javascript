class Drink extends Product {
  constructor(name, price, imageClass) {
    super(name, price, imageClass, "Drinks");
  }

  // render redefenition
  render() {
    const card = super.render();
    card.classList.add("drink-card");
    return card;
  }
}
