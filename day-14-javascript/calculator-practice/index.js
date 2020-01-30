
// wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // save elements for manipulation
  let resultEl = document.querySelector('.calc__result');
  console.log(resultEl);

  let inputEl = document.querySelector('.calc__input');
  console.log(inputEl);

  let buttonAddEl = document.querySelector('.calc__btn-add');
  console.log(buttonAddEl);

  let buttonSubstractEl = document.querySelector('.calc__btn-substract');
  console.log(buttonSubstractEl);

  // attach event listener to add
  buttonAddEl.addEventListener('click', () => {
    resultEl.value = Number(resultEl.value) + Number(inputEl.value);
    console.log(resultEl.value);
  });

  // attach event listener to substract
  buttonSubstractEl.addEventListener('click', () => {
    s
    resultEl.value = Number(resultEl.value) - Number(inputEl.value);
    console.log(resultEl.value);
  });

});
