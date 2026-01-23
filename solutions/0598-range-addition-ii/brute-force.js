// time: O(N * M)
// space: O(N * M)

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = (m, n, ops) => {
    const arr = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    let result = 0;

    for (const [x, y] of ops) {
        for (let row = 0; row < x; row++) arr[row][0]++;
        for (let row = 0; row < x; row++) arr[row][y]--;
    }

    let max = 0;
    for (let row = 0; row < arr.length; row++) {
        let sum = 0;
        for (let col = 0; col < arr[0].length; col++) {
            sum += arr[row][col];
            arr[row][col] = sum;
            max = Math.max(max, sum);
        }
    }

    for (let row = 0; row < arr.length; row++)
        for (let col = 0; col < arr[0].length; col++)
            if (arr[row][col] === max) result++;

    return Math.min(result, m * n);
};
