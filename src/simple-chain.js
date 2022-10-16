const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  resultChain : [],

  getLength() {
    return this.resultChain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.resultChain.push('');
    }
    this.resultChain.push(value);

    return chainMaker;
  },
  removeLink(position) {
    if (this.resultChain[position-1] == undefined) {
      this.resultChain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.resultChain.splice((position-1), 1);

    return chainMaker;
  },
  reverseChain() {
    this.resultChain.reverse();
    return chainMaker;
  },
  finishChain() {
    let str = this.resultChain.map((r) => `( ${r} )`).join('~~')
    this.resultChain = [];
    return str
  }
};

module.exports = {
  chainMaker
};
