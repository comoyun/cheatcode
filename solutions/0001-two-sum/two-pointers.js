// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    nums = nums.map((num, id) => [id, num]);
    nums.sort((a, b) => a[1] - b[1]);

    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        const sum = nums[left][1] + nums[right][1];
        if (sum === target) return [nums[left][0], nums[right][0]];
        sum > target ? right-- : left++;
    }
};
