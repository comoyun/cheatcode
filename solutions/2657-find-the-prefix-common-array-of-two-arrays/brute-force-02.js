// time: O(n^2)
// space: O(n)

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = (A, B) => {
    const set = new Set();
    const n = A.length;
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let count = 0;
        set.add(A[i]);

        for (let j = 0; j <= i; j++) if (set.has(B[j])) count++;
        result[i] = count;
    }

    return result;
};

