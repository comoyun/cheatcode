// time: O(n)
// space: O(n)

/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumElementAfterDecrementingAndRearranging = arr => {
    const n = arr.length;
    const buckets = new Array(n + 1).fill(0);
    let result = 1;

    for (const num of arr) buckets[Math.min(num, n)]++;

    for (let i = 2; i < n + 1; i++) {
        const count = buckets[i];
        result = Math.min(result + count, i);
    }

    return result;
};
