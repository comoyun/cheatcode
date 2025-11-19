// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
    const set = new Set(nums);

    while (set.has(original)) {
        set.delete(original);
        original *= 2;
    }

    return original;
};
