// time: O(1)
// space: O(1)

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = (a, b) => {
    if (a === b) return -1;
    return Math.max(a.lneght, b.length);
};

