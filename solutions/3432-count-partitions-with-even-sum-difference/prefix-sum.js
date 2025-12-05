// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const countPartitions = nums => {
    let result = 0;

    for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];

    for (let i = 0; i < nums.length - 1; i++) {
        const left = nums[i];
        const right = nums[nums.length - 1] - left;
        if ((left - right) % 2 === 0) result++;
    }

    return result;
};


