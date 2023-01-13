const { assert } = require('chai');
const toCamelCase = require('../src/convert-string-to-camel-case');

describe('Convert to camel case tests', () => {
  it('should allow empty strings.', () => {
    assert.strictEqual(toCamelCase(''), '',
      'An empty string was provided but not returned');
  });
  it('should return Camel case when input is lowercase.', function () {
    assert.strictEqual(toCamelCase('the_stealth_warrior'), 'theStealthWarrior',
      'toCamelCase(\'the_stealth_warrior\') did not return correct value');
  });
  it('should return Pascal case when input is uppercase.', function () {
    assert.strictEqual(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior',
      'toCamelCase(\'The-Stealth-Warrior\') did not return correct value');
  });
  it('should work with single letters', function () {
    assert.strictEqual(toCamelCase('A-B-C'), 'ABC',
      'toCamelCase(\'A-B-C\') did not return correct value');
  });
});
