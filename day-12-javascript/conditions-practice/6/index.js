
swimmerOne = (prompt('Please enter name: '));
swimmerTwo = (prompt('Please enter name: '));
swimmerThree = (prompt('Please enter name: '));

// The returned value is no lower than min, and is less than max.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

timeOne = Math.ceil(Math.random() * (60 - 45) + 45);
timeTwo = Math.ceil(Math.random() * (60 - 45) + 45);
timeThree = Math.ceil(Math.random() * (60 - 45) + 45);

console.log(timeOne);
console.log(timeTwo);
console.log(timeThree);

if (timeOne < timeTwo && timeOne < timeThree) {
  document.write('Gold Medal: ' + swimmerOne + ': ' + timeOn);
  document.write("<br>");

  if (timeTwo < timeThree) {
    document.write('Silver Medal: ' + swimmerTwo + ': ' + timeTwo);
    document.write("<br>");
    document.write('Bronze Medal: ' + swimmerThree + ': ' + timeThree);
  } else {
    document.write('Silver Medal: ' + swimmerThree + ': ' + timeThree);
    document.write("<br>");
    document.write('Bronze Medal: ' + swimmerTwo + ': ' + timeTwo);
  }

} else if (timeTwo < timeOne && timeTwo < timeThree) {
  document.write('Gold Medal: ' + swimmerTwo + ': ' + timeTwo);
  document.write("<br>");

  if (timeOne < timeThree) {
    document.write('Silver Medal: ' + swimmerOne + ': ' + timeOne);
    document.write("<br>");
    document.write('Bronze Medal: ' + swimmerThree + ': ' + timeThree);
  } else {
    document.write('Silver Medal: ' + swimmerThree + ': ' + timeThree);
    document.write("<br>");
    document.write('Bronze Medal: ' + swimmerOne + ': ' + timeOne);
  }

} else {
  document.write('Gold Medal: ' + swimmerThree + ': ' + timeThree);
  document.write("<br>");

  if (timeTwo < timeOne) {
    document.write('Silver Medal: ' + swimmerTwo + ': ' + timeTwo);
    document.write("<br>");
    document.write('Bronze Medal: ' + swimmerOne + ': ' + timeOne);
  } else {
    document.write('Silver Medal: ' + swimmerOne + ': ' + timeOne);
    document.write("<br>");
    document.write('Bronze Medal: ' + swimmerTwo + ': ' + timeTwo);
  }

}
