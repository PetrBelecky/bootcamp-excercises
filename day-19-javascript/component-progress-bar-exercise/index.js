document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM content loaded');

  const app = document.querySelector('#app');

  const progress1 = new ProgressBar(3);
  const progress2 = new ProgressBar(5);
  const progress3 = new ProgressBar(7);

  progress1.mount(app);
  progress2.mount(app);
  progress3.mount(app);
});

