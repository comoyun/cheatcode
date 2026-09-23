// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = (nums, x) => {
    const n = nums.length;
    const map = {};
    const suffix = new Array(n + 1).fill(0);
    let prefixSum = 0;
    let result = Infinity;

    for (let i = n - 1; i >= 0; i--) suffix[i] = suffix[i + 1] + nums[i];
    for (let i = 0; i < n; i++) map[suffix[i]] = i;

    for (let i = -1; i < n; i++) {
        prefixSum += i === -1 ? 0 : nums[i];
        const complement = x - prefixSum;

        if (complement === 0) result = Math.min(result, i + 1);
        if (complement in map && map[complement] > i)
            result = Math.min(result, n - map[complement] + i + 1);
    }

    return result === Infinity ? -1 : result;
};

