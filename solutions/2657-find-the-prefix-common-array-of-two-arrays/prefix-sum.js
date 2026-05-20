// time: O(n)
// space: O(n)

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = (A, B) => {
    const n = A.length;
    const result = new Array(n).fill(0);
    const map = {};

    for (let i = 0; i < n; i++) map[A[i]] = i;
    for (let i = 0; i < n; i++) result[Math.max(i, map[B[i]])]++;
    for (let i = 1; i < n; i++) result[i] += result[i - 1];

    return result;
};
