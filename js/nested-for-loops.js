/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
	let result = "\n";

	// Write code here
	for (var b = 0; b < depth; b++) {

		for (var a = 0; a < width; a++) {


			result += "{x:" + a + ", y:" + b + "}";
			if (a + 1 < width) {
				result += ", "
			} else {
				result += "\n"
			}
		}
	}
	console.log(result);
	return result;
};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(3));
