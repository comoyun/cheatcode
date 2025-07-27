// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const differenceOfSums = (n, m) => {
    const total = (n * (n + 1)) / 2;
    const count = Math.floor(n / m);
    const div = m * (count * (count + 1)) / 2;
    const res = total - div * 2;

    return res;
};


