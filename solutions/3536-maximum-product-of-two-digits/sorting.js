// time: O(d log d)
// space: O(d)

/**
 * @param {number} n
 * @return {number}
 */
const maxProduct = n => {
    const digits = n.toString().split('').map(Number);
    digits.sort((a, b) => a - b);
    return digits.at(-1) * digits.at(-2);
};
