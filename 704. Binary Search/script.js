const search = function (nums, target, loverBound = 0, upperBound = nums.length) {
    const midPoint = Math.floor((loverBound + upperBound) / 2);
    if (target === nums[midPoint]) return midPoint;
    else if (midPoint === loverBound || midPoint === upperBound) return -1;
    else if (target > nums[midPoint]) return search(nums, target, midPoint, upperBound);
    else if (target < nums[midPoint]) return search(nums, target, loverBound, midPoint);
};