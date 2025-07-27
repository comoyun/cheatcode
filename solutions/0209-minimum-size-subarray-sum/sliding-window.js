// time: O(n)
// space: O(1)

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    const n = nums.length;

    let sum = 0;
    let left = 0;
    let right = 0;
    let result = Infinity;

    for (; right < n; right++) {
        sum += nums[right];
        while (sum >= target && left <= right) {
            result = Math.min(result, right - left + 1);
            sum -= nums[left++];
        }
    }

    return result === Infinity ? 0 : result;
};
