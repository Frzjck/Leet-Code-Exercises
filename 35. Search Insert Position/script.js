// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// const nums = [3, 5, 6];
const nums2 = [1, 3, 5, 6];
const nums = [1, 3, 5];
const nums3 = [1];


const bignums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
    55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
    74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
    93, 94, 95, 96, 97, 98, 99, 100
];

// const searchInsert = (nums, target) => {
//     let index = nums.indexOf(target);
//     if (index === -1) {
//         let lower = 0;
//         let upper = nums.length - 1;
//         for (let i = 0; i < nums.length + 1; i++) {
//             index = Math.trunc(((lower + upper) / 2));
//             if (upper === 0 && nums.length < 1 || upper < 0) return 0;
//             if (lower === nums.length) return nums.length;
//             else if (nums[index] > target && nums[index - 1] < target) return index;
//             else if (nums[index] < target) lower = index + 1;
//             else if (nums[index] > target) upper = index - 1;
//         }
//     }
//     return index;
// };

let count = 0;

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        count++;
        console.log(count);
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};




// const searchInsert = (nums, target, lower = 0, upper = nums.length - 1) => {
//     count++;
//     console.log(count);
//     const index = Math.trunc(((lower + upper) / 2));
//     if (upper === 0 && nums.length < 1 || upper < 0) return 0;
//     if (lower === nums.length) return nums.length;
//     if (nums[index] === target || (nums[index] > target && nums[index - 1] < target)) return index;
//     else if (nums[index] < target) return searchInsert(nums, target, index + 1, upper);
//     else if (nums[index] > target) return searchInsert(nums, target, lower, index - 1);
// };

console.log(searchInsert(bignums, 88));