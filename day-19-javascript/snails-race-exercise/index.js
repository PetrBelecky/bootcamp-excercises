document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');

  const container = document.querySelector('.race__ground');

  // fetch data
  fetch('http://bootcamp.podlomar.org/api/snails/6')
    .then(
      (res) => {
        // if status is 200 proceed
        if (res.status === 200) {

          // convert to JSON
          res.json()
            .then((json) => {
              console.log(json);

              // for every object in array
              json.forEach((snail) => {
                new Snail(
                  snail.name, snail.velocity, snail.color)
                  .mount(container);
              });
            })
        }
      });
})