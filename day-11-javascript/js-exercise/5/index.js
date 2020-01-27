
let input = Number(prompt("Please enter a temperature in Fahrnheit: ").replace(",", "."));

let celsius = Math.round((input - 32) * (5 / 9));

document.write("input: " + input + "\n");
document.write("celsius: " + celsius);