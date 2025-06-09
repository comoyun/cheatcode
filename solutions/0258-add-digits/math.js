/*
 * @title: Math
 * @time: O(1)
 * @space: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = num => {
    if (!num) return 0;
    const mod = num % 9;
    if (!mod) return 9;
    return mod;
};
