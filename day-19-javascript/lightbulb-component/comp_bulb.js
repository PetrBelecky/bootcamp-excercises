
class Bulb {
  constructor() {
    this.isOn = false;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'bulb__wrapper';
    this.element.addEventListener('click', () => { this.update() });

    return this.element;
  }

  update() {
    if (this.isOn === false) {
      this.element.classList.add('bulb--on');
      this.isOn = true;
    } else {
      this.element.classList.remove('bulb--on');
      this.isOn = false;
    }
  }

  mount(parentElement) {
    this.render();
    parentElement.appendChild(this.element);
  }
}