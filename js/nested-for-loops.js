/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops (depth, width = depth) {
  let result = "\n";

  // Write code here

  for (let i=0; i<depth; i++){
    for (let j=0; j<width; j++){
      result = result + '{x:' + j + ', ' + 'y:' + i + '}, ';
    }
    result = result + '\n';
    result = result.replace(', \n', '\n')
  }
  return result;
};

// To see our console output outside the tests add function calls here.
//console.log(nestedForLoops(3));
