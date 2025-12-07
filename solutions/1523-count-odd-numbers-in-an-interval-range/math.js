// time: O(1)
// space: O(1)

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
    const diff = high - low + 1;

    if (low % 2 === 0) return Math.floor(diff / 2);
    return Math.ceil(diff / 2);
};

