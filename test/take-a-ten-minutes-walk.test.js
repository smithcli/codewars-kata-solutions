const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const isValidWalk = require('../src/take-a-ten-minutes-walk');

describe('Ten-minute-walk tests', () => {
  it('should be a 10 min walk', () => {
    assert.isTrue(
      isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      'should return true');
  });

  it('should not be more than 10 min', function () {
    assert.isFalse(
      isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
      'should return false');
  });

  it('should not be less than 10 min', function () {
    assert.isFalse(isValidWalk(['w']), 'should return false');
  });

  it('should return you to your starting point', function () {
    assert.isFalse(
      isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      'should return false');
  });
});
