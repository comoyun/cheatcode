/*
 * @title: Sorting
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = n => {
    const arr = Array.from({ length: n }, (_, idx) => idx + 1);
    return arr.sort();
};

console.log(lexicalOrder(1000));
console.log(lexicalOrder(2));
