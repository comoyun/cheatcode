/*
 * @title: Math
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = n => {
    let count = 0;
    while (n) {
        n = Math.floor(n / 5);
        count++;
    }
    return count;
};
