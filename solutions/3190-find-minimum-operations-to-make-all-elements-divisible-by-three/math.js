// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = nums => {
    let result = 0;
    for (const num of nums) {
        if (num % 3 === 0) continue;
        result++;
    }

    return result;
};
