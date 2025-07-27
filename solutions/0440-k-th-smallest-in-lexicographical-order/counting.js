// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = (n, k) => {
    let curr = 1;
    k = k - 1;

    while (k) {
        let count = 0;
        let first = curr;
        let last = curr;

        while (first <= n) {
            count += Math.min(last, n) - first + 1;
            first *= 10;
            last = last * 10 + 9;
        }

        if (count <= k) {
            curr++;
            k -= count;
        } else {
            curr *= 10;
            k--;
        }
    }

    return curr;
};
