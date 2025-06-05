/*
 * @title: Math
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {
    const result = [];
    for (let i = 0; i < 1 << n; i++) result.push(i ^ (i >> 1));
    return result;
}

