// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
const arr = [4, 1, 2, 1, 2];
const singleNumber = (nums) => {
	const numSet = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (!numSet.has(nums[i])) numSet.add(nums[i]);
		else if (numSet.has(nums[i])) numSet.delete(nums[i]);
	}
	return [...numSet][0];
};

const singleNumber2 = (nums) => {
	let singleNum = 0;
	for (let i = 0; i < nums.length; i++) singleNum = singleNum ^ nums[i];
	return singleNum;
};

singleNumber2(arr);
