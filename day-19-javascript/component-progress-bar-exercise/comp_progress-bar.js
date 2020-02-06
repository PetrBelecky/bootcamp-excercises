class ProgressBar {

  // creator can choose an initial value + color of bar + max val
  constructor(value, color, max) {
    this.value = value;
    this.color = color;
    this.max = max;
  }

  // increment value by 1 and call update
  increment() {
    if (this.value < this.max) {
      this.value += 1;
      this.update();
    }
  }

  // decrement value by 1 and call update
  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.update();
    }
  }

  // create element bar element in browser memory 
  render() {
    this.element = document.createElement('div');
    this.element.className = 'progress-bar';
    this.element.innerHTML = (
      `<div id="label" class="label">
        <span id="counter"></span>/<span id="maximum">${this.max}</span>
       </div>
       <div class="progress">
        <div id="minus" class="btn-minus"></div>
        <div class="bar">
          <div id="knob" class="knob"></div>
        </div>
        <div id="plus" class="btn-plus"></div>
       </div>
       <div id="message" class="message"></div>`
    );

    // change the color based on creator preferences
    const knobElm = this.element.querySelector('#knob');
    knobElm.style.backgroundColor = this.color;

    // add event listener to add button, calling increment method
    const btnPlus = this.element.querySelector('#plus');
    btnPlus.addEventListener('mousedown', () => this.increment());

    // add event listener to sub button, calling decrement method
    const btnMinus = this.element.querySelector('#minus');
    btnMinus.addEventListener('mousedown', () => this.decrement());

    return this.element;
  }

  // this function is called on init & increment/decrement
  update() {

    //change text value according to actual value 
    const counterElm = this.element.querySelector('#counter');
    counterElm.textContent = this.value;

    // change graphical value based on actual value
    const knobElm = this.element.querySelector('#knob');
    knobElm.style.width = `${((this.value / this.max) * 100)}%`;

    // show message, if boundaries are hit

    /* const msgEl = this.element.querySelector('#message');
    if (this.value === this.max) {
      msgEl.className = 'message--warn';
      msgEl.textContent = `${this.max} is a maximum value`;
    } else if (this.value === 0) {
      msgEl.className = 'message--warn';
      msgEl.textContent = '0 is a minimum value';
    } else {
      msgEl.className = 'message';
      msgEl.textContent = '';
    } */
  }

  // append created element to DOM
  mount(parentElement) {

    // crate element
    this.render();

    // initial update with a desired value 
    this.update();

    // append to DOM
    parentElement.appendChild(this.element);
  }
}