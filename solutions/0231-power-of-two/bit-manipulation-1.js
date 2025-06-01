/*
 * @title: Bit Manipulation
 * @time: O(1)
 * @space: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => n.toString(2).replaceAll('0', '').length === 1;
