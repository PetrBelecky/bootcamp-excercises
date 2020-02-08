
document.addEventListener('DOMContentLoaded', () => {
  console.log('connected');

  const aside = document.querySelector('#aside');

  aside.addEventListener('mouseenter', () => {
    aside.classList.remove('aside--closed');
  });

  aside.addEventListener('mouseleave', () => {
    aside.classList.add('aside--closed');
  });
})


// previous solution

/* document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const menuItemsEl = document.querySelector(".menu-wrapper");
  const wrapperEl = document.querySelector("img");
  const headline = document.querySelector("h1");

  console.log(menuItemsEl);
  console.log(wrapperEl);
  console.log(headline);

  wrapperEl.addEventListener("click", () => {
    console.log("logo");

    menuItemsEl.classList.toggle("hidden");
    menuItemsEl.classList.toggle("active");
  });

  headline.addEventListener("click", () => {
    console.log("entered");
  });
});
 */

