
//show alert
const changeLabel = () => {
  const btn = document.querySelector('.product__bnb');
  const quantity = document.querySelector('.buy__input').value;
  console.log(quantity);
  const message = document.querySelector('.quantity__message');


  if (quantity > 1) {
    message.textContent = 'You have ' + quantity + " Batducks in your cart."
  } else if (quantity === 1) {
    message.textContent = 'You have ' + quantity + " Batduck in your cart."
  } else {
    message.textContent = 'You have not entered any amount.'
    message.style.color = '#dd2626';
    message.style.fontWeight = 'bold';
  }

  btn.textContent = 'In Cart';
  btn.className = "btn--cart";

}