// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = nums => {
    const n = nums.length;
    let result = 0;

    nums.sort((a, b) => a - b);
    let prev = nums[0];

    for (let i = n - 1; i >= 0; i--) {
        const max = nums[i] + result;
        const diff = max - prev;
        prev = max;
        result += diff;
    }

    return result;
};
