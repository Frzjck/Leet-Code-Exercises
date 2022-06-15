nums = [1, 1, 2];

// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

let removeDuplicates = (nums) => Array.from(new Set(nums)).length;



console.log(removeDuplicates(nums));