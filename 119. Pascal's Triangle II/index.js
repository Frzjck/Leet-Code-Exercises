// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

const getRow = (rowIndex) => {
	let result = [1];
	for (let i = 0; i <= rowIndex; i++) {
		const current = new Array(i + 1);
		current[0] = 1;
		current[current.length - 1] = 1;
		for (let i = 1; i < current.length - 1; i++) {
			current[i] = result[i - 1] + result[i];
		}
		result = current;
	}
	return result;
};

console.log(getRow(3));
