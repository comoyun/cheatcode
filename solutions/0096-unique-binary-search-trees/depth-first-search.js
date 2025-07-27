// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const numTrees = n => {
    const memo = new Map();

    const count = (lo, hi) => {
        const key = `${lo},${hi}`;
        if (memo.has(key)) return memo.get(key);
        if (lo > hi) return 1;

        let total = 0;
        for (let root = lo; root <= hi; root++) {
            const left = count(lo, root - 1);
            const right = count(root + 1, hi);
            total += left * right;
        }

        memo.set(key, total);
        return total;
    };

    return count(1, n);
};
