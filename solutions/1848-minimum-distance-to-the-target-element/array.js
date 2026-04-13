// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = (nums, target, start) => {
    let result = Infinity;
    for (let i = 0; i < nums.length; i++)
        nums[i] === target && (result = Math.min(result, Math.abs(i - start)));
    return result;
};

