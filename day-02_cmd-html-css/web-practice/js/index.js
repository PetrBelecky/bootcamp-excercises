
// save button element and h2 element
let theButton = document.getElementById('theButton');
let theText = document.querySelectorAll('.the-text');

// when clicking selected element
theButton.onclick = function () {
    
    console.log("working");

    // for every selected element, add/remove class "colorized"
    for(let x of theText) {
        x.classList.toggle('colorized');
    }
};
