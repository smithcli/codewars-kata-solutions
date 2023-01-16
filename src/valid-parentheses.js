const validParentheses = (parens) => {
  let match = 0;
  for (const p of parens) {
    if (p === ')' && match === 0) {
      match = -1; // returns false, not valid paren
      break;
    }
    if (p === '(') match += 1;
    if (p === ')') match -= 1;
  }
  return match === 0;
};
module.exports = validParentheses;
