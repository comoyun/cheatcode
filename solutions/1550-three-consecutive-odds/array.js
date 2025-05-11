/*
 * @title: Index
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = arr => {
    for (let i = 0; i < arr.length - 2; i++)
        if (arr[i] & 1 && arr[i + 1] & 1 && arr[i + 2] & 1) return true;
    return false;
};

