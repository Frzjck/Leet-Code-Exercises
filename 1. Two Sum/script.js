
// // 1. Two Sum START

// const nums = [2, 7, 11, 15];
// // const nums = [3, 2, 4];
// const nums = [0, 0, 3, 3];
// const target = 6;

// function twoSum1(nums: number[], target: number): number[] {
// 	let firstNum = 0;
// 	let secondNum = 0;
// 	for (let i = 0; i < nums.length; i++) {

// 		secondNum = nums.findIndex((n, index) => {
// 			if (i !== index && nums[i] + n === target) return index;
// 		});

// 		if (secondNum && secondNum !== -1) {
// 			firstNum = i;
// 			break;
// 		}
// 	}

// 	let response: number[] = [firstNum, secondNum];
// 	return response;
// }

// function twoSum(nums: number[], target: number): number[] | void {
// 	const hashTable = new Map();

// 	for (let i = 0; i < nums.length; i++) {
// 		const compliment = target - nums[i];
// 		if (hashTable.has(compliment)) {
// 			return [hashTable.get(compliment), i];
// 		}
// 		hashTable.set(nums[i], i);
// 	}
// }

// console.log(twoSum(nums, target));

// 1. Two Sum END