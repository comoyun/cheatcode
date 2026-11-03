// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = nums => {
    const max = Math.max(...nums);
    let result = 0;
    for (const num of nums) result += max - num;
    return result;
};

