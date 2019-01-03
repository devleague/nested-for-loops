/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";

  for (let y = 0; y < depth; y++) {
    for (let x = 0; x < width; x++) {
      let data = `{x:${x}, y:${y}}`;
      result += data;
      if (x === width - 1) {
        result += "\n";
      } else {
        result += ", "
      }
    }
  }
  return result;
};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
