// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const flowerGame = (n, m) => {
    const oddN = Math.ceil(n / 2);
    const oddM = Math.ceil(m / 2);
    const evenN = Math.floor(n / 2);
    const evenM = Math.floor(m / 2);
    return oddN * evenM + oddM * evenN;
};

