// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

const generate = (numRows) => {
	if (numRows === 0) return [];
	if (numRows === 1) return [[1]];
	if (numRows === 2) return [[1], [1, 1]];
	const result = [[1], [1, 1]];
	for (let i = 3; i <= numRows; i++) {
		const currentLevel = new Array(i);
		currentLevel[0] = 1;
		currentLevel[i - 1] = 1;
		for (let i = 1; i < currentLevel.length - 1; i++) {
			currentLevel[i] = result.at(-1)[i - 1] + result.at(-1)[i];
		}
		result.push(currentLevel);
	}
	return result;
};

console.log(generate(5));
