
const conversionRate = 25.695;

let input = Number(prompt("Please enter value in euros: "));

let czechCrowns = Math.round(input * conversionRate);

alert("It will be " + czechCrowns + " CZK");