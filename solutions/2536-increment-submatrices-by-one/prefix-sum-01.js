// time: O(q * n + n * n)
// space: O(n * n)

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
const rangeAddQueries = (n, queries) => {
    const arr = Array.from({ length: n }, () => new Array(n).fill(0));
    for (const query of queries) {
        const [y1, x1, y2, x2] = query;

        for (let i = y1; i <= y2; i++) {
            arr[i][x1]++;
            if (x2 + 1 < n) arr[i][x2 + 1]--;
        }
    }

    for (let row = 0; row < n; row++) {
        let sum = 0;
        for (let col = 0; col < n; col++) {
            sum += arr[row][col];
            arr[row][col] = sum;
        }
    }

    return arr;
};

