// time: O(N log N)
// space: O(log N)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = (nums, k) => {
    nums.sort((a, b) => a - b);

    let result = Infinity;

    for (let i = k - 1; i < nums.length; i++) {
        let low = nums[i - (k - 1)];
        let high = nums[i];
        result = Math.min(result, high - low);
    }

    return result;
};
