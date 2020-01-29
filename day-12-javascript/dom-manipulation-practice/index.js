
const changeLabel = () => {

  // quantity in input field & message box
  const quantity = Number(document.querySelector('.buy__input').value);
  const message = document.querySelector('.quantity__message');

  const changeButton = () => {
    const btn = document.querySelector('.product__bnb');
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



