const { assert } = require('chai');
const decodeMorse = require('../src/decode-the-morse-code-part1');

describe('decode-the-morse-code-part1', function () {

  it('Example from description', () => {
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });

  it('Leading and trailing spaces', () => {
    assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
  });

});

// describe("Your own tests", function(){
//   it("Your test case", () => {
//     assert.strictEqual(decodeMorse(???), ???);
//   });
// });
