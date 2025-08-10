// time: O(1)
// space: O(1)

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    while (b) {
        const sum = a ^ b;
        const common = a & b;
        a = sum;
        b = common << 1;
    }
    return a;
};
