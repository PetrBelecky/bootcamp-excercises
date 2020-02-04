const hours = [10, 8, 10, 7, 5, 4, 9];
const days = ['mon', 'tue', 'wed', 'thur', 'fri'];
days.push('sat');
days.push('sun');
console.log(hours[6]);
console.log(days[0]);
console.log(days[2]);
console.log(days[5]);
console.log(days.length);

console.log('------------');

const numbers = [
  18,
  8,
  -24,
  28,
  -17,
  14,
  -10,
  24,
  12,
  -31,
  19,
  32,
  -14,
  -10,
  13,
  8,
  -15,
  -2,
  17
];

// Output the number of items in the array to the console. Answer: 19
// Output the number at the index 13 to the console. Answer: -10
// Output the number which is exactly in the middle of the array. Answer: -31

const middle = (numbers.length - 1) / 2;
const middle2 = Math.floor(numbers.length / 2);
console.log('Array length: ' + numbers.length);
console.log('Number on index of 13: ' + numbers[13]);
console.log('Number in middle: ' + numbers[middle2]);

console.log('------------');

numbers.forEach(num => {
  // Output every number in the array to the console.
  console.log('Base: ' + num);

  // Output the square of every number to the console
  console.log('Square: ' + num * num);
});

// Output only negative numbers from the array.
numbers.forEach(num => {
  if (num < 0) {
    console.log('Negative: ' + num);
  }
});

// Output an absolute value of every number in the array.
numbers.forEach(num => {
  console.log('Abs: ' + Math.abs(num));
});

// Using a loop find the index of the number -10 in the array.
numbers.forEach((num, index) => {
  if (num === -10) {
    console.log('Index of -10: ' + index);
  }
});

// Output only those numbers which absolute value id divisible by 3.
numbers.forEach(num => {
  if (Math.abs(num) % 3 === 0) {
    console.log('Abs devisable by 3: ' + num);
  }
});

// Output only even numbers from the array.
for (let index = 0; index < numbers.length; index += 2) {
  console.log('Even positions of array: ' + numbers[index]);
}

console.log('------------');

// For every number in the array output the difference between that number and number 5.
numbers.forEach(num => {
  console.log(num + '-5 = ' + (num - 5));
});

// For every number x in the array output the squared difference of x and number 5.
numbers.forEach(num => {
  let squaredDiff = (num - 5) ** 2;
  console.log(num + '-5(squared) = ' + squaredDiff);
});

// Output all the numbers which are greater then their predecessor in the array.
let predecessor = null;
let succesor = null;

numbers.forEach(num => {
  if (num > predecessor) {
    console.log(num + ' is bigger than ' + predecessor);
  }
  predecessor = num;
});

// Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.
predecessor = null;
successor = null;

numbers.forEach((num, index) => {
  successor = numbers[index + 1];

  if (predecessor && num > predecessor && num > successor) {
    console.log(num + ' is bigger than ' + predecessor + ' & bigger than ' + successor);
  }
  predecessor = num;
});

console.log('------------');

// Count how many items does the array contain without using the array.length property.
let numCount = 0;
numbers.forEach(num => {
  numCount += 1;
});
console.log(numCount);

// Count how many negative and positive numbers are there in the array.
let positiveNumCount = 0;
let negativeNumCount = 0;

numbers.forEach(num => {
  if (num > 0) {
    positiveNumCount += 1;
  } else if (num < 0) {
    negativeNumCount += 1;
  }
});
console.log('Positive count: ' + positiveNumCount);
console.log('Negative count: ' + negativeNumCount);

// Compute the sum of all the numbers in the array. Answer: 70
let sumOfNums = 0;
numbers.forEach(num => {
  sumOfNums += num;
});
console.log('Sum of numbers is: ' + sumOfNums);

// Compute the average of the numbers in the array. Answer: 3.68421...
const avgNumber = sumOfNums / numCount;
console.log('Average is: ' + avgNumber);

// Compute the sum of all the positive numbers in the array.
let sumOfPositiveNums = 0;
numbers.forEach(num => {
  if (num > 0) {
    sumOfPositiveNums += num;
  }
});
console.log('Sum of positive numbers: ' + sumOfPositiveNums);

// First, compute the average number in the array and save the result in a variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...

// Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897...
let sumOfSquaredDiffs = 0;
let variance = 0;

numbers.forEach(num => {
  let temp = num - avgNumber;
  temp = temp ** 2;
  sumOfSquaredDiffs += temp;
  variance = sumOfSquaredDiffs / numCount;
});
console.log(sumOfSquaredDiffs);
console.log(variance);

console.log('------------');

// Find the longest sequence of consecutive numbers which is either ascending or descending.

let tempPositiveStreak = 0;
let tempNegativeStreak = 0;
let ascendingStreak = 0;
let descendingStreak = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < numbers[index + 1]) {
    tempNegativeStreak = 0;
    tempPositiveStreak += 1;
    if (tempPositiveStreak > ascendingStreak) {
      ascendingStreak = tempPositiveStreak;
    }
  } else if (numbers[index] > numbers[index + 1]) {
    tempPositiveStreak = 0;
    tempNegativeStreak += 1;
    if (tempNegativeStreak > descendingStreak) {
      descendingStreak = tempNegativeStreak;
    }
  }
}
console.log('Greatest length of ascending serie is: ' + ascendingStreak);
console.log('Greatest length of descending serie is: ' + descendingStreak);

// Find the biggest element in the array
// Find the second biggest element in the array.
let biggestNum = null;
let secondBiggestNum = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > biggestNum) {
    secondBiggestNum = biggestNum;
    biggestNum = numbers[index];
  }
}

console.log('Biggest numbers is: ' + biggestNum);
console.log('Second biggest numbers is: ' + secondBiggestNum);

// Find the lowest peak and the highest valley in the array.
predecessor = null;
successor = null;
let lowestPeak = biggestNum;
let highestValley = 0;

numbers.forEach((num, index) => {
  successor = numbers[index + 1];

  if (predecessor && num > predecessor && num > successor) {
    if (num < lowestPeak) {
      lowestPeak = num;
    }
  } else if (predecessor && num < predecessor && num < successor) {
    {
      if (num < highestValley) {
        highestValley = num;
      }
    }
  }
  predecessor = num;
});

console.log('Lowest peak: ' + lowestPeak);
console.log('Highest valley: ' + highestValley);

console.log('------------');
