// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => {
    if (n <= 0) return false;

    let left = 0;
    let right = 15;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const pow = 4 ** mid;

        if (pow === n) return true;

        if (pow < n) left = mid + 1;
        else right = mid - 1;
    }

    return false;
};
