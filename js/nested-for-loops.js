/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";
  let arr = [];
  for (let i = 0; i < depth; i++) {
    arr.length = 0;
    for (let j = 0; j < width; j++) {
      arr.push('{x:' + j + ', y:' + i + '}');
    }
    result += arr.join(', ')
    result += '\n'
  }
  return result;
};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
