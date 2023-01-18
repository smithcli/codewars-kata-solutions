const { assert } = require('chai');
const factorial = require('../src/recursion-1-factorial');

describe(`Recursion #1 - Factorial tests`, () => {

  it(`factorial(0)`, () => {
    assert.strictEqual(factorial(0), 1);
  });
  it(`factorial(1)`, () => {
    assert.strictEqual(factorial(1), 1);
  });
  it(`factorial(2)`, () => {
    assert.strictEqual(factorial(2), 2);
  });
  it(`factorial(3)`, () => {
    assert.strictEqual(factorial(3), 6);
  });
});
