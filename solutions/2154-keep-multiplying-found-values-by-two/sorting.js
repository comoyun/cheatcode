// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
    let curr = original;

    nums.sort((a, b) => a - b);

    for (const num of nums) {
        if (num === curr) curr *= 2;
    }

    return curr;
};
