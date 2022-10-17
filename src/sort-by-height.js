const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrWithout = [];
  let resultArr = [];
  let indexArr = 0;
  arr.forEach((elem) => {
    if (elem != -1) {
      arrWithout.push(elem);
    }
  })

  arrWithout.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      resultArr.push(arr[i]);
    } else {
      resultArr.push(arrWithout[indexArr]);
      indexArr++;
    }
  }
  indexArr = 0;
  return resultArr;
}

module.exports = {
  sortByHeight
};
