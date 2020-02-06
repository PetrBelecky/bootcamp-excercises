
class SalaryCalculation {
  constructor() {
    this.pay = 0;
    this.hours = 0;
    this.days = 0;
    this.tax = 0;
  }

  render() {
    this.element = document.createElement('form');
    this.element.setAttribute('action', '#');
    this.element.innerHTML =
      `<p class="message" id="salary-message"></p>
      <div class="input__wrapper">
        <input type="number" name="" id="pay" required>
        <label for="pay">Your hourly earn</label>
      </div>
      <div class="input__wrapper">
        <input type="number" name="" id="hours" required>
        <label for="hours">Hours per day</label>
      </div>
      <div class="input__wrapper">
        <input type="number" name="" id="days" required>
        <label for="days">Days in month</label>
      </div>
      <div class="input__wrapper">
        <input type="number" name="" id="tax" disabled readonly value="15">
        <label for="tax">Expected tax in %</label>
      </div>

      <div class="result">
        <p id="result"></p>
      </div>

      <button>Calculate</button>`

    const calcBtn = this.element.querySelector('button');

    calcBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.update();
    })

    return this.element;
  }

  update() {

    console.log('updating');

    const pay = Number(this.element.querySelector('#pay').value);
    const hours = Number(this.element.querySelector('#hours').value);
    const days = Number(this.element.querySelector('#days').value);
    const tax = Number(this.element.querySelector('#tax').value);

    let msg = this.element.querySelector('#result');

    const calculation =
      Math.round(pay * hours * days * ((100 - tax) / 100));

    msg.textContent =
      calculation
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' EUR';
  }

  mount(parentElement) {
    console.log('mounting');
    this.render();
    parentElement.appendChild(this.element);
  }
}