// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = (nums, x) => {
    const n = nums.length;
    const suffix = new Array(n + 1).fill(0);
    let sum = 0;
    let result = Infinity;

    for (let i = n - 1; i >= 0; i--) suffix[i] = suffix[i + 1] + nums[i];

    const search = (target, start) => {
        let left = start;
        let right = n - 1;
        let result = -1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);

            if (suffix[mid] > target) left = mid + 1;
            else if (suffix[mid] < target) right = mid - 1;
            else {
                result = mid;
                left = mid + 1;
            }
        }

        return result;
    };

    for (let i = -1; i < n; i++) {
        sum += i === -1 ? 0 : nums[i];
        const target = x - sum;

        if (target === 0) result = Math.min(result, i + 1);

        const idx = search(target, i + 1);

        if (idx !== -1) result = Math.min(result, n - idx + i + 1);
    }

    return result === Infinity ? -1 : result;
};
