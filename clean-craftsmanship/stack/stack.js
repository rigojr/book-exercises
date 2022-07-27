/**
 * Testing TDD
 *
 * Rule 1. Write the test that force you to write you already know you want to write.
 * Rule 2. Make it fail. Make it pass. Clean it up.
 * Rule 3. Don't go for the gold.
 */

/**
 * The exercise.
 *
 * Implement a first-in-first-out queue of integers with TDD.
 * Use a fixed-size array to hold the integers. You will likely
 * need two pointers to keep track of where the elements are to be
 * added and removed. When you are done, you may find that you have
 * implemented a circular buffer.
 */

class MyStack {
  size;
  stack;

  constructor(size) {
    if (typeof size !== 'number') {
      throw new Error('The size should be defined as a number.');
    }

    if (size <= 0) {
      throw new Error('The size should be above 0.');
    }

    this.size = size;
    this.stack = new Array();
  }

  getSize() {
    return this.size;
  }

  push(integer) {
    if (this.stack.length === this.size) {
      throw new Error('stack overflow.');
    }

    this.stack.push(integer);
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error('stack underflow.');
    }

    return this.stack.pop();
  }
};

module.exports = MyStack;