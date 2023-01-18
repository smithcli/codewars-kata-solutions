const { assert } = require("chai")
const x3or5 = require('../src/multiples-of-3-or-5');

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = x3or5(n)
    assert.strictEqual(actual, expected)
  })
}

describe("basic tests", function(){
  // 3+5+6+9 = 23
  test(10,23)
  // 3+5+6+9+10+12+15+18 = 78
  test(20,78)
  // small cases
  test(4,3)
  test(6,8)
})
