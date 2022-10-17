const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = [];
  let newStrInner = [];
  let resultStr = '';
  let resultInnerStr = '';
  if (options.addition !== undefined) {
    for (let j = 0; j < (options.additionRepeatTimes || 1); j++) {
      newStrInner.push(options.addition + '');
    }
  }

  if (options.additionSeparator !== undefined) {
    resultInnerStr = newStrInner.join(options.additionSeparator)
  } else {
    resultInnerStr = newStrInner.join('|')
  }

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    newStr.push(str + '' + resultInnerStr) 
  }

  if (options.separator !== undefined) {
    resultStr = newStr.join(options.separator)
  } else {
    resultStr = newStr.join('+')
  }

 return resultStr;
}

module.exports = {
  repeater
};
