

const milesToKilometersPerHour = 1.609344;

let input = Number(prompt("Enter miles per hour please: "));

let kmh = Math.round(input * milesToKilometersPerHour);

alert("Conversion returned " + kmh + " km/h");