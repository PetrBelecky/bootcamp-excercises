
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

const showMessage = (event) => {
  event.preventDefault();

  const passDoNotMatch = () => {
    msg.textContent = 'Sorry, your passwords don\'t match.';
    msg.className = 'msg msg--error';
  }

  const msgSuccess = () => {
    msg.textContent = 'Your account was succesfully created.';
    msg.className = 'msg msg--success';
  }

  const msg = document.querySelector('#message');
  const pass1 = document.querySelector('#pass1').value;
  const pass2 = document.querySelector('#pass2').value;

  if (pass1 !== pass2) {
    passDoNotMatch();
  } else {
    msgSuccess();
  }

}

const changeImage = () => {
  const image = document.querySelector('.bulb__wrapper');
  image.classList.toggle('bulb--on');
}

const showResult = (event) => {
  event.preventDefault();
  const box = document.querySelector('.result');
  const msg = document.querySelector('#result');
  const pay = Number(document.querySelector('#pay').value);
  const hours = Number(document.querySelector('#hours').value);
  const days = Number(document.querySelector('#days').value);
  const tax = Number(document.querySelector('#tax').value);

  const calculateSalary = (pay, hours, days, tax) => {

    return Math.round(pay * hours * days * ((100 - tax) / 100));
  }

  box.classList.remove('hidden');
  const calculatedSalary = calculateSalary(pay, hours, days, tax);
  msg.textContent = calculatedSalary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' EUR';
}