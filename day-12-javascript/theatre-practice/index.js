
// give me your seat name
const input = prompt("What is your seat number?");

// start counting seats from zero (-1)
// 
const column = (input - 1) % 11 + 1;

const row = Math.trunc((input - 1) / 11);

const seatID = String.fromCharCode(65 + row) + column;

document.write(seatID);