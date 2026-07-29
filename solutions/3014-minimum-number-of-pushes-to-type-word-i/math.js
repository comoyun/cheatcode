// time: O(1)
// space: O(1)

/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = word => {
    const n = word.length;
    const count = Math.floor(n / 8);
    const rem = n % 8;
    return 8 * ((count * count + count) / 2) + rem * (count + 1);
};
