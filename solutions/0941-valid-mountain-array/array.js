/*
 * @title: Array
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = a => {
    let i = 0, n = a.length;
    if (n < 3) return false;
    while (i + 1 < n && a[i] < a[i + 1]) i++;
    if (i === 0 || i === n - 1) return false;
    while (i + 1 < n && a[i] > a[i + 1]) i++;
    return i === n - 1;
};

