// time: O(n)
// space: O(n)

/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = candyType => {
    const set = new Set(candyType);
    const n = candyType.length;

    return Math.min(n / 2, set.size);
};
