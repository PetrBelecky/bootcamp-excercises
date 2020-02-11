console.log('connected');

class Contact {
  constructor(name, gender, phone) {
    this.name = name;
    this.gender = gender;
    this.phone = phone;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'contact';
    this.element.innerHTML = `
    <div class="contact__avatar contact__avatar--${this.gender}"></div>
    <div class="contact__body">
      <div class="contact__name">
        ${this.name}
      </div>
      <div class="contact__phone">
        ${this.phone}
      </div>
    </div>
    <button class="contact__callbtn"></button>`

    return this.element;
  }

  mount(parentElm) {
    this.render();
    parentElm.appendChild(this.element);
  }
}