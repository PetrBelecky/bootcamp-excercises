document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM content loaded');

  const app = document.querySelector('#app');

  const redBar = new ProgressBar(5, 'red', 17);
  const greenBar = new ProgressBar(3, 'green', 17);
  const blueBar = new ProgressBar(7, 'blue', 17);

  redBar.mount(app);
  greenBar.mount(app);
  blueBar.mount(app);


  const btn = document.querySelector('.color__changer');
  const box = document.querySelector('.color');

  btn.addEventListener('click', () => {
    const red = redBar.value * 15;
    const green = greenBar.value * 15;
    const blue = blueBar.value * 15;

    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
  })
});

