
const input = Number(prompt("Please enter number of month :"));

if (input < 1 && input > 12) {
  "Look, the year has only 12 months. Starting with 1. Which is January. Try again.";
}

if (input === 1) {
  document.write("31");
} else if (input === 2) {
  document.write("28");
} else if (input === 3) {
  document.write("31");
} else if (input === 4) {
  document.write("30");
} else if (input === 5) {
  document.write("31");
} else if (input === 6) {
  document.write("30");
} else if (input === 7) {
  document.write("31");
} else if (input === 8) {
  document.write("31");
} else if (input === 9) {
  document.write("30");
} else if (input === 10) {
  document.write("31");
} else if (input === 11) {
  document.write("30");
} else if (input === 12) {
  document.write("31");
}