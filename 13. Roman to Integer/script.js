
// // 13. Roman to Integer START
// function romanToInt(s: string): number {
// 	let [...strArr] = s;

// 	let numArr: number[] = strArr.map((letter: string) => {
// 		if (letter === "I") return 1;
// 		else if (letter === "V") return 5;
// 		else if (letter === "X") return 10;
// 		else if (letter === "L") return 50;
// 		else if (letter === "C") return 100;
// 		else if (letter === "D") return 500;
// 		else if (letter === "M") return 1000;
// 		else return 0;
// 	});

// 	let convertedNum = numArr.reduce((acc, curVal, index, array) => {
// 		if (index === array.length - 1) return acc + curVal;
// 		else if (curVal < array[index + 1]) return acc - curVal;
// 		else return acc + curVal;
// 	}, 0);

// 	return convertedNum;
// };
// // 13. Roman to Integer END