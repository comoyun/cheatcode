// time: O(1)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = n => {
    const mod = n % 7;
    const weeks = Math.floor(n / 7);
    return (
        weeks * 28 +
        ((weeks * (weeks - 1)) / 2) * 7 +
        (mod * (mod + 1)) / 2 +
        mod * weeks
    );
};
