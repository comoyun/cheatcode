// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestInteger = (nums, k) => {
    const n = nums.length;

    if (k === 1) {
        const freq = {};
        let result = -1;

        for (const num of nums) freq[num] = (freq[num] || 0) + 1;
        for (const num in freq)
            result = Math.max(result, freq[num] === 1 ? +num : -Infinity);

        return result;
    }

    if (n === k) return Math.max(...nums);

    let last = nums[n - 1];
    let first = nums[0];

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] === last) {
            last = -1;
            break;
        }
    }

    for (let i = 1; i < n; i++) {
        if (nums[i] === first) {
            first = -1;
            break;
        }
    }

    return Math.max(first, last);
};
