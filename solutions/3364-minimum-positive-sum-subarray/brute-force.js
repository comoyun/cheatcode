// time: O(n * r)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
const minimumSumSubarray = (nums, l, r) => {
    const n = nums.length;
    let result = Infinity;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < Math.min(n, i + r); j++) {
            sum += nums[j];

            if (sum <= 0 || j - i + 1 < l) continue;

            result = Math.min(result, sum);
        }
    }

    return result === Infinity ? -1 : result;
};
