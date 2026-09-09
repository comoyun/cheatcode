// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const countCommas = n => {
    const p = n.toString().length - 1;
    let commas = Math.floor(p / 3);
    let result = 0;
    while (commas) {
        const max = 10 ** (commas * 3) - 1;
        result += (n - max) * commas;
        n = max;
        commas--;
    }
    return result;
};

