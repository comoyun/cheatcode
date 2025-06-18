/*
 * @title: Sorting
 * @time: O(n log n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
const divideArray = (nums, k) => {
    nums.sort((a, b) => a - b);
    const result = [];
    let triple = [];
    for (const num of nums) {
        triple.push(num);
        if (triple.length === 3) {
            const [a, _, c] = triple;
            if (c - a > k) return [];
            result.push(triple);
            triple = [];
        }
    }
    return result;
};
