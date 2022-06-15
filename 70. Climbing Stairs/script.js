// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:

// 1 <= n <= 45





// /**
//  * @param {number} n
//  * @return {number}
//  */

const climbStairs = (targetSum) => {
    if (targetSum > 0) {
        return climbStairs(targetSum - 1) + climbStairs(targetSum - 2);
    } else if (targetSum === 0) {
        return 1;
    } else return 0;
};


const climbStairsRefactored = (targetSum, memo = {}) => {
    if (targetSum > 0) {
        if (targetSum in memo) return memo[targetSum];
        memo[targetSum] = climbStairsRefactored(targetSum - 1, memo) + climbStairsRefactored(targetSum - 2, memo);
        return memo[targetSum];
    } else if (targetSum === 0) {
        return 1;
    } else return 0;
};

console.time();
console.log(climbStairsRefactored(42));
console.timeEnd();














var climbStairs2 = function (n) {
    const array = [1, 1];
    if (n > 1) {
        for (i = 2; i <= n; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }
    }
    return array.pop();
};