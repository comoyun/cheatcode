// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const maxValue = nums => {
    const n = nums.length;
    const prefix = new Array(n).fill(-Infinity);
    const suffix = new Array(n).fill(Infinity);
    const result = new Array(n).fill(0);

    const binarySearch = (left, right, target) => {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (suffix[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return right;
    };

    prefix[0] = nums[0];
    suffix[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) prefix[i] = Math.max(nums[i], prefix[i - 1]);
    for (let i = n - 2; i >= 0; i--)
        suffix[i] = Math.min(nums[i], suffix[i + 1]);

    for (let i = n - 1; i >= 0; i--) {
        result[i] = prefix[i];
        const idx = binarySearch(i + 1, n - 1, prefix[i]);
        if (idx >= 0) result[i] = Math.max(result[i], result[idx]);
    }

    return result;
};
