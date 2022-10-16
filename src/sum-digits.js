const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  let sum = 0;
  n = n.toString();
  
  for (let i = 0; i < n.length; i++) {
    sum += +n[i];
  }

  if (sum > 9) {
    sum = getSumOfDigits(sum);
  } 
  return sum;
}

module.exports = {
  getSumOfDigits
};
