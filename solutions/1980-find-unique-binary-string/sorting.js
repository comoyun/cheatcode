// time: O(n log n)
// space: O(n)

/**
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = nums => {
    nums = nums.map(bin => parseInt(bin, 2));
    nums.sort((a, b) => a - b);

    const n = nums.length;
    let prev = 0;

    for (let i = 0; i < n; i++) {
        const curr = nums[i];
        if (curr - prev > 1) return (curr - 1).toString(2).padStart(n, '0');
        prev = curr;
    }

    const result = (nums[n - 1] + 1).toString(2);
    return result.length > n ? '0'.repeat(n) : result;
};
