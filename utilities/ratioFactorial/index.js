const ratio = require("../ratio/index");
const factorial = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const result = {
    ratio: ratio(num1, num2),
    factorial: factorial(num3),
  };
  return result;
};

module.exports = ratioAndFactorial;
