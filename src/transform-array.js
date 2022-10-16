const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

let discarded = new Set([]);

function isCommand(val) {
  switch(val) {
    case '--discard-next':
      return true;
    case '--discard-prev':
      return true;
    case '--double-next':
      return true;
    case '--double-prev':
      return true;
  }
}

function hasNext(arr, i) {
  if (isCommand(arr[i + 1])) {
    return false;
  }

  return !discarded.has(i + 1) && arr[i + 1] !== undefined;
}

function hasPrev(arr, i) {
  if (isCommand(arr[i - 1])) {
    return false
  }

  return !discarded.has(i - 1) && arr[i - 1] !== undefined;
}

function transform(arr) {
  discarded = new Set([]);

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let resultArr = [];
  let newArr = JSON.parse(JSON.stringify(arr));

  for (let i = 0; i < newArr.length; i++) {
    if (isCommand(newArr[i])) {
      switch(newArr[i]) {
        case '--discard-next':
          if (hasNext(newArr, i)) {
            discarded.add(i + 1);
          }
          
          break;
        case '--discard-prev':
          if (hasPrev(newArr, i)) {
            discarded.add(i - 1);
            resultArr.splice(resultArr.length - 1, 1);
          }

          break;
        case '--double-next':
          if (hasNext(newArr, i)) {
            resultArr.push(newArr[i+1]);
          }

          break;
        case '--double-prev':
          if (hasPrev(newArr, i)) {
            resultArr.push(newArr[i-1]);
          }

          break;
      }
    } else if (!discarded.has(i)) {
      resultArr.push(newArr[i]);
    }
  }

  return resultArr;
}

module.exports = {
  transform
};
