// time: O(n)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = n => {
    if (n === 0) return 0;

    const arr = new Array(n + 1).fill(0);
    arr[1] = 1;

    for (let i = 1; 2 * i <= n; i++) {
        arr[2 * i] = arr[i];
        if (2 * i + 1 <= n) arr[2 * i + 1] = arr[i] + arr[i + 1];
    }

    return Math.max(...arr);
};
