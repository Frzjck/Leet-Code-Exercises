// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
	const numSet = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (!numSet.has(nums[i])) numSet.add(nums[i]);
		else if (numSet.has(nums[i])) numSet.delete(nums[i]);
	}
	return [...numSet][0];
};
