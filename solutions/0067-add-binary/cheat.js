// time: O(1)
// space: O(1)

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    const x = BigInt('0b' + a);
    const y = BigInt('0b' + b);
    return (x + y).toString(2);
};
