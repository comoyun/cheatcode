/*
 * @title: Binary Search
 * @time: O(1)
 * @space: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
    if (n <= 0) return false;
    let left = 0,
        right = 31;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const val = 1 << mid;

        if (val === n) return true;
        if (val < n) left = mid + 1;
        else right = mid - 1;
    }

    return false;
};
