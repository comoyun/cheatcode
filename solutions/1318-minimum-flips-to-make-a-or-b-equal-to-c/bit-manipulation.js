/*
 * @title: Bit Manipulation
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = (a, b, c) => {
    let flips = 0;
    while (a || b || c) {
        const bitA = a & 1,
            bitB = b & 1,
            bitC = c & 1;
        a >>= 1;
        b >>= 1;
        c >>= 1;

        if ((bitA | bitB) === bitC) continue;

        flips += bitC ? 1 : bitA & bitB ? 2 : 1;
    }
    return flips;
};
