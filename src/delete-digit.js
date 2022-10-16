const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxArr = [];
  let n2 = n.toString();
  for (let i = 0; i < n2.length; i++) {
    let maxN = n2.split('')
    maxN.splice(i, 1)
    maxArr.push(+maxN.join(''))
  }

  return Math.max(...maxArr);
}

module.exports = {
  deleteDigit
};
