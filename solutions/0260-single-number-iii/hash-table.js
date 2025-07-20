/*
 * @title: Hash Table
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = nums => {
    const map = new Map();
    const result = [];
    for (const num of nums) map.set(num, (map.get(num) || 0) + 1);
    for (const num of nums) 
        if (map.get(num) === 1) result.push(num);
    return result;
};
