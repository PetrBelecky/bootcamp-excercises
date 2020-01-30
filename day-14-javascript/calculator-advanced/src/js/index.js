

// wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM loaded');

  let lastOperation;

  // save elements for manipulation
  let resultEl = document.querySelector('.calc__result');
  let inputEl = document.querySelector('.calc__input');

  let buttonAddEl = document.querySelector('#btn-add');
  let buttonSubstractEl = document.querySelector('#btn-substract');
  let buttonMultiplyEl = document.querySelector('#btn-multiply');
  let buttonDivisionEl = document.querySelector('#btn-division');

  let buttonClearEl = document.querySelector('#btn-clear');
  let buttonEqualEl = document.querySelector('#btn-equals');

  //create functions
  const add = () => {
    resultEl.textContent = Number(resultEl.textContent) + Number(inputEl.value);

    lastOperation = 'add';
  }

  const substract = () => {
    resultEl.textContent = Number(resultEl.textContent) - Number(inputEl.value);

    lastOperation = 'substract'
  }

  const multiply = () => {
    resultEl.textContent = Number(resultEl.textContent) * Number(inputEl.value);

    lastOperation = 'multiply'
  }

  const division = () => {
    resultEl.textContent = Number(resultEl.textContent) / Number(inputEl.value);

    lastOperation = 'division'
  }

  // attach event listener to clear
  buttonClearEl.addEventListener('click', () => {
    resultEl.textContent = 0;
    console.log(resultEl.value);
  });

  // attach event listener to equals
  buttonEqualEl.addEventListener('click', () => {
    if (lastOperation === 'add') {
      add();
    } else if (lastOperation === 'substract') {
      substract();
    } else if (lastOperation === 'multiply') {
      multiply();
    } else if (lastOperation === 'division') {
      division();
    }
  });

  // attach event listeners to add, substract, multiply, division
  buttonAddEl.addEventListener('click', add);
  buttonSubstractEl.addEventListener('click', substract);
  buttonMultiplyEl.addEventListener('click', multiply);
  buttonDivisionEl.addEventListener('click', division);

});