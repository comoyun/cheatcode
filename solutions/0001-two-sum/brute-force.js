// time: O(n^2)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let result = nums[i] + nums[j];
            if (result === target) return [i, j];
        }
    }
};
