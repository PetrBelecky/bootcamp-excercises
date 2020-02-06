
class Product {
  constructor(image, author, link, origin, title) {
    this.image = image;
    this.author = author;
    this.link = link;
    this.origin = origin;
    this.title = title;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'product__wrap';
    this.element.innerHTML =
      `<h2 class="product__title">I am ${this.title}!</h2>
      <img 
        class="product_thumb" 
        src="${this.image}" 
        alt="${this.title} photo"
      >
      <p 
        class="product__desc">
        Photo by 
        <a href="${this.link}">
        ${this.author}
        </a> 
        on ${this.origin}
      </p>
      <form class="buy__wrapper" onsubmit="return false">
        <button class="product__bnb">Buy Me!</button>
        <input required class="buy__input" type="number" name="quantity">
      </form>
      <p class="quantity__message">You have no ${this.title} in your cart.</p>`

    const btn = this.element.querySelector('.product__bnb');
    btn.addEventListener('click', () => { this.update(); })

    return this.element;

  }

  update() {
    // quantity in input field & message box
    let quantity = Number(this.element.querySelector('.buy__input').value);
    let message = this.element.querySelector('.quantity__message');

    const changeButton = () => {
      let btn = this.element.querySelector('.product__bnb');
      btn.textContent = 'In Cart';
      btn.className = 'btn--cart';
    }

    const resetMessageColor = () => {
      message.style.color = '#8fbc8f';
      message.fontWeight = 'normal';
    }

    if (quantity > 1) {
      message.textContent = 'You have ' + quantity + " Batducks in your cart."
      resetMessageColor();
      changeButton();

    } else if (quantity === 1) {
      message.textContent = 'You have ' + quantity + " Batduck in your cart."
      resetMessageColor();
      changeButton();

    } else {
      message.textContent = 'You have not entered any amount.'
      message.style.color = '#dd2626';
      message.style.fontWeight = 'bold';
    }
  }


  mount(parentElement) {
    this.render();
    parentElement.appendChild(this.element);
  }
}








