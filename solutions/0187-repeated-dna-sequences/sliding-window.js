/*
 * @title: Sliding Window + Hash Table
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = s => {
    const result = new Set();
    const set = new Set();
    const n = s.length;

    for (let i = 0; i <= n - 10; i++) {
        const substr = s.slice(i, i + 10);
        if (set.has(substr)) result.add(substr);
        else set.add(substr);
    }

    return [...result];
};
