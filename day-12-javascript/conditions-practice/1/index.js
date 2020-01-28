const input1 = Number(prompt("Please enter first angle"));
const input2 = Number(prompt("Please enter second angle"));
const input3 = Number(prompt("Please enter third angle"));

const angles = input1 + input2 + input3;

if (angles === 180) {
  document.write("Yep, that seems like a triangle");
} else {
  document.write("Nope, that is not a triangle");
}

