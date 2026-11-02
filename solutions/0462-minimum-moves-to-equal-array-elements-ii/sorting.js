// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = nums => {
    const n = nums.length;
    let result = 0;
    nums.sort((a, b) => a - b);

    const median = nums[Math.floor(n / 2)];

    for (const num of nums) result += Math.abs(num - median);

    return result;
};
