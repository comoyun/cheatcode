// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const smallestNumber = n => {
    let bin = '';

    while (n) {
        n = Math.floor(n / 2);
        bin += '1';
    }

    return parseInt(bin, 2);
};
