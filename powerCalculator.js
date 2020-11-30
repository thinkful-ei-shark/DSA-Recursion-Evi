//Power Calculator

function powerCalculator(base, exp) {
  //base case
  if (exp <= 0) return "exponent should be >= 0";
  if (exp === 1) return base;
  //general case
  else return base * powerCalculator(base, exp - 1);
}

console.log(powerCalculator(10, 3));
console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));
console.log(powerCalculator(10, 1));
