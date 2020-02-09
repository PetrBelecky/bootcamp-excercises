
document.addEventListener('DOMContentLoaded', () => {

  const bulbWrapper = document.querySelector('.bulb');
  const bulb = new Bulb();
  bulb.mount(bulbWrapper);

  const salaryWrapper = document.querySelector('.salary');
  const salaryForm = new SalaryCalculation();
  salaryForm.mount(salaryWrapper);

  const productWrapper = document.querySelector('.product');
  const product = new Product(
    'batduck.jpg',
    'Brett Jordan',
    'https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    'Unsplash',
    'Batduck');
  product.mount(productWrapper);

  const loginWrapper = document.querySelector('.login');
  const loginForm = new Login();
  loginForm.mount(loginWrapper);

})

/*

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
 */

