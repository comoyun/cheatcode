// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxTotalValue = (nums, k) => {
    let max = -Infinity;
    let min = Infinity;

    for (const num of nums) {
        max = Math.max(max, num);
        min = Math.min(min, num);
    }

    return k * (max - min);
};

