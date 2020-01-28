
const passwordOne = prompt('Please enter your password: ');
const passwordTwo;

if (passwordOne.length < 8) {
  alert('Password needs to be longer than 8 characters. Please reload page and try again');
} else {
  passwordTwo = prompt('Please, re-enter you password: ');
}

if (passwordOne === passwordTwo) {
  document.write('Cool, your password works!');
} else {
  document.write('Your passwords, don\'t match ');
}