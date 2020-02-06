document.addEventListener('DOMContentLoaded', () => {
  console.log('It works');

  counterEl = document.querySelector('#counter');
  plusEl = document.querySelector('#plus');
  minusEl = document.querySelector('#minus');
  knobEl = document.querySelector('#knob');
  msgEl = document.querySelector('#message');

  console.log(counterEl);
  console.log(plusEl);
  console.log(minusEl);
  console.log(knobEl);
  console.log(msgEl);

  plusEl.addEventListener('click', () => {
    console.log('clicked plus');
    if (counterEl.textContent === '10') {
      msgEl.className = 'message--warn';
      msgEl.textContent = '10 is a maximum';
      return;
    } else {
      counterEl.textContent = Number(counterEl.textContent) + 1;
      knobEl.style.width = (counterEl.textContent + '0' + '%');
      msgEl.className = 'message';
      msgEl.textContent = '';
    }
  })

  minusEl.addEventListener('click', () => {
    console.log('clicked minus');
    if (counterEl.textContent === '0') {
      msgEl.className = 'message--warn';
      msgEl.textContent = '0 is a minimum';
      return;
    } else {
      counterEl.textContent = Number(counterEl.textContent) - 1;
      knobEl.style.width = (counterEl.textContent + '0' + '%');
      msgEl.className = 'message';
      msgEl.textContent = '';
    }
  })
});