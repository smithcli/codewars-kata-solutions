function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let northSouth = 0;
  let eastWest = 0;
  walk.forEach((block) => {
    block.toLowerCase();
    if (block === 'n') northSouth += 1
    if (block === 's') northSouth -= 1
    if (block === 'e') eastWest += 1
    if (block === 'w') eastWest -= 1
  })
  return northSouth === 0 && eastWest === 0;
}
module.exports = isValidWalk;
