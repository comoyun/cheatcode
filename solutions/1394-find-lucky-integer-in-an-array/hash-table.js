/*
 * @title: Hash Table
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = arr => {
    const map = {};
    let result = -1;
    for (const num of arr) map[num] = (map[num] || 0) + 1;
    for (const num of arr) if (num === map[num]) result = Math.max(result, num);
    return result;
};
