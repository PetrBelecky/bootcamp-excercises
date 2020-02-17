
const load_movies = () => {

  fetch("http://exercises:8080/day-26-php/api/movie_names.php")
    .then(response => response.json())
    .then(data => {
      const listElm = document.querySelector("#list");

      data.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        listElm.appendChild(li);
      });
    })
}

document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM loaded");


  document.querySelector("#button")
    .addEventListener("click", () => {
      console.log("clicked");
      load_movies();
    }
    )
})


