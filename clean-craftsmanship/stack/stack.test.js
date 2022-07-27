/**
 * Just to test stack following TDD.
 */

const MyStack = require('./stack');

describe('stack', () => {
  test('should create myStack', () => {
    const myStack = new MyStack(3);

    expect(myStack instanceof MyStack).toStrictEqual(true);
  });

  test('should return size', () => {
    const expected = 3;
    const myStack = new MyStack(expected);

    expect(myStack.getSize()).toStrictEqual(expected);
  });

  test('should push the given integer', () => {
    const expected = 1;
    const myStack = new MyStack(3);

    myStack.push(expected);

    expect(myStack.pop()).toStrictEqual(expected);
  });

  test('should throw when push a full myStack', () => {
    const myStack = new MyStack(3);

    myStack.push(1);
    myStack.push(2);
    myStack.push(3);

    expect(() => myStack.push(4)).toThrow();
  });

  test('should pop the last integer push ', () => {
    const expected = 2;
    const myStack = new MyStack(3);

    myStack.push(1);
    myStack.push(expected);

    expect(myStack.pop()).toStrictEqual(expected);
  });

  test('should throw when pop an underflow myStack', () => {
    const myStack = new MyStack(1);

    expect(() => myStack.pop()).toThrow();
  });

  test('should throw when myStack is create with integer equal or below 0', () => {
    expect(() => new MyStack(0)).toThrow();
    expect(() => new MyStack(-1)).toThrow();
  });

  test('should throw when myStack is create with no valid size type', () => {
    expect(() => new MyStack()).toThrow();
    expect(() => new MyStack('x')).toThrow();
    expect(() => new MyStack({ 'x': 'y' })).toThrow();
    expect(() => new MyStack(new Date())).toThrow();
    expect(() => new MyStack(undefined)).toThrow();
    expect(() => new MyStack(false)).toThrow();
    expect(() => new MyStack([ 'x' ])).toThrow();
  });
});