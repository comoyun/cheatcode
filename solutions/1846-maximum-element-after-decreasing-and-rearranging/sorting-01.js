// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumElementAfterDecrementingAndRearranging = arr => {
    arr.push(0);
    arr.sort((a, b) => a - b);
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const prev = arr[i - 1];
        const curr = arr[i];

        if (curr - prev > 1) arr[i] = prev + 1;
    }

    return arr[n - 1];
};


