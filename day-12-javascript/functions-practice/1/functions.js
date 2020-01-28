
// square function
const square = (num) => { num ** 2 };

// hypotenuse function 
const hypotenuse = (num1, num2) => {
  return Math.sqrt(square(num1) + square(num2));
}

//absolute value function 
const abs = (num) => {
  if (num >= 0) {
    return num;
  } else {
    return -num;
  }
}

// make an email address from a login name
const emailFromLogin = (username) => {
  return (username + '@codeboot.com');
}

// make a username from the name and surname
const loginFromName = (name, surname) => {
  //take a 5 letters from a last name and 3 leters from first name

  username = String(surname.slice(0, 5) + name.slice(0, 3)).toLowerCase();
  return username;
}

// make email from the name 
const emailFromName = (firstName, secondName) => {
  const username = loginFromName(firstName, secondName);
  return emailFromLogin(username);
}

// salary function 
const salary = (pay, hours, days) => {
  return pay * hours * days;
}

// taxed salary
const taxedSalary = (salary, tax) => {
  return salary * ((100 - tax) / 100)
}

// maximum of 3 values 
const max3 = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  } else {
    return "Two highest numbers are of equal value";
  }
}

// minimum of 3 values
const min3 = (num1, num2, num3) => {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else if (num3 < num1 && num3 < num2) {
    return num3;
  } else {
    return "Two lowest numbers are of equal value";
  }
}

// make a spread of 3 values
const spread = (a, b, c) => {
  const max = max3(a, b, c);
  const min = min3(a, b, c);
  return max - min;
}
