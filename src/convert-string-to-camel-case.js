const toCamelCase = (str) => {
  // Remove delimiters
  let strArray = str.split(/[^a-zA-Z0-9]/gm);
  strArray.forEach((word, index) => {
    if (index !== 0) {
      strArray[index] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  return strArray.join('');
};
module.exports = toCamelCase;
