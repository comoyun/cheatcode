// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findMissingElements = nums => {
    const result = [];
    const set = new Set();

    let min = Infinity;
    let max = -Infinity;

    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
        set.add(num);
    }

    for (let i = min + 1; i < max; i++) if (!set.has(i)) result.push(i);

    return result;
};

