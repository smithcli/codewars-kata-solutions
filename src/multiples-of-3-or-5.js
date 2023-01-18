const x3or5 = (number) => {
  const greatestDenomOf3 = Math.floor((number - 1) / 3);
  const greatestDenomOf5 = Math.floor((number - 1) / 5);
  // Early return if number does not qualify
  if (greatestDenomOf3 < 1) return 0;
  // if at least 3, store all values in Set
  const multiplesOf3or5 = new Set();
  for (let i = 0; i <= greatestDenomOf3; i++) {
    if (i <= greatestDenomOf5) multiplesOf3or5.add(i * 5);
    multiplesOf3or5.add(i * 3);
  }
  // add all values
  let sum = 0;
  multiplesOf3or5.forEach((value) => sum += value);
  return sum;
};
module.exports = x3or5;
