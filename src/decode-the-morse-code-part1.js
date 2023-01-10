const MORSE_CODE = require('./morse_code.json');

const decodeMorse = function (morseCode) {
  let msg = '';
  let code = '';
  let spaces = 0;
  for (let i = 0; i <= morseCode.length; i++) {
    const char = morseCode[i];
    // character or word break, log and continue
    if (char === ' ') {
      spaces += 1;
      continue;
    }
    // if current char is valid
    // letter
    if ((spaces === 1 || i === morseCode.length) && code) {
      msg += MORSE_CODE[code];
      code = '';
    }
    // word break
    if (spaces === 3 && code) {
      console.log(code);
      msg += MORSE_CODE[code];
      msg += ' ';
      code = '';
    }
    spaces = 0;
    code += char;
  }
  return msg;
};

module.exports = decodeMorse;
