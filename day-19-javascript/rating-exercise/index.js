
document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM content loaded');

  // variable text value
  let txtValue = document.querySelector('.rating__value');

  // variables for every star (1-5)
  const starsEl = document.querySelectorAll('.rating__star');

  // add event listener to every start
  starsEl.forEach((star) => {

    // on clicking one of the stars
    star.addEventListener('click', () => {

      // save which star was clicked
      const starClicked = star.getAttribute('id');

      // change text value to ID of star
      txtValue.textContent = starClicked;

      // for each star in a set
      starsEl.forEach((star) => {

        // save current ID
        const starID = star.getAttribute('id');

        // clicked ID is greater than current ID
        if (starClicked >= starID) {

          // add class of yellow
          star.classList.add('rating__star--on');
        } else {

          // remove class of yellow
          star.classList.remove('rating__star--on');
        }
      });
    })
  });
})