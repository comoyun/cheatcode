/*
 * @title: Bit Manipulation
 * @time: O(log n)
 * @space: O(1)
 */

/**
 * @param {number} k
 * @return {character}
 */
const kthCharacter = k => {
    let ones = 0;
    k--;
    while (k) {
        ones += k & 1;
        k >>= 1;
    }
    return String.fromCharCode(97 + (ones % 26));
};
