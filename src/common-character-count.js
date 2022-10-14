const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let countLetters = {}

  Array.from(s1).forEach((i) => {
    if (i in countLetters) { 
      countLetters[i] += 1 
    } else { 
      countLetters[i] = 1
    }
  })

  let count = 0;
  Array.from(s2).forEach((i) => {
    if (i in countLetters) {
      if (countLetters[i] <= 0) {
        return;
      }

      count += 1;
      countLetters[i] -= 1;
    }
  })

  return count;
 }

module.exports = {
  getCommonCharacterCount
};
