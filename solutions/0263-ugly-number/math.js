/*
 * @title: Math
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = n => {
    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;
    return n === 1;
};

