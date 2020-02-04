/* eslint-disable max-classes-per-file */
console.log('connected');


class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell(count) {
    this.quantity -= count;
    return this.quantity;
  }

  store(count) {
    this.quantity += count;
    return this.quantity;
  }
}

const laptop = new Product('HP-2020 Windy', 20000, 156);
const monitor = new Product('HP-Shiny', 14000, 89);
const keyboard = new Product('HP-Clicky', 799, 1987);
const mouse = new Product('HP-Mousey', 499, 2569);
const printer = new Product('HP-Inky', 499, 254);
const headphones = new Product('HP-Quitey', 2499, 58);

class Bus {
  constructor(direction, stations, seats, passengers, lastStation) {
    this.direction = direction;
    this.stations = stations;
    this.seats = seats;
    this.passengers = passengers;
    this.lastStation = lastStation;
  }

  current() {
    return this.stations[this.lastStation];
  }

  next() {
    return this.stations[this.lastStation + 1];
  }

  board(count) {
    if (count > this.seats) {
      this.passengers = this.seats;
      return this.passengers;
    }
    this.passengers = count;
    return this.passengers;
  }

  unboard(count) {
    if (count > this.passengers) {
      this.passengers -= this.passengers;
      return this.passengers;
    }
    this.passengers -= count;
    return this.passengers;
  }
}

const PragueVienna = new Bus('Prague to Vienna', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 60, 58, 0);
