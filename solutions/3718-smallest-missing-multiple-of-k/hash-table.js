// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingMultiple = (nums, k) => {
    const set = new Set();
    let max = 0;

    for (const num of nums) {
        set.add(num);
        max = Math.max(max, num);
    }

    for (let i = 1; i <= max / k + 1; i++) if (!set.has(i * k)) return i * k;
    return 0;
};
