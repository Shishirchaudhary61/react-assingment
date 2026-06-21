
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return` ${this.name} costs $${this.price}`;
  }
}

class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate;
  }

  getFoodInfo() {
    return `${this.name} costs $${this.price} and expires on ${this.expiryDate}`;
  }
}

const milk = new FoodProduct("Milk", 3.5, "2026-06-01");

console.log(milk.getInfo());
console.log(milk.getFoodInfo());