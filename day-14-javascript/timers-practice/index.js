
let counter = 5;

// wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM loaded')

  // save variables for manipulation
  const stopEl = document.querySelector('.lights__stop');
  const walkEl = document.querySelector('.lights__walk');
  const messageEl = document.querySelector('.lights__message');

  console.log(stopEl);
  console.log(walkEl);
  console.log(messageEl);

  // add an event listener
  walkEl.addEventListener('click', () => {

    console.log('walk clicked');

    // when walk clicked, change it to on and stop to off
    walkEl.classList.remove('lights__walk--off');
    walkEl.classList.add('lights__walk--on');

    stopEl.classList.remove('lights__stop--on');
    stopEl.classList.add('lights__stop--off');

    messageEl.textContent = 'Run, Forrest, run!';

    // after 5000ms, reset it back to default
    setTimeout(() => {
      walkEl.classList.add('lights__walk--off');
      walkEl.classList.remove('lights__walk--on');

      stopEl.classList.add('lights__stop--on');
      stopEl.classList.remove('lights__stop--off');

      messageEl.textContent = 'Please click the walk sign';

      console.log('time run out');

    }, 5000)

  })

});
