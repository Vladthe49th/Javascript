class Electronics extends Product {
  constructor(name, price, imageClass) {
    super(name, price, imageClass, "Electronics");
  }

  // render redefenition
  render() {
    const card = super.render();
    card.classList.add("electronics-card");
    return card;
  }
}
