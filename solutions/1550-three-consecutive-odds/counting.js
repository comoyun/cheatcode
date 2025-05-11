/*
 * @title: Counting
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const isOdd = arr[i] & 1;

        if (isOdd && ++count === 3) return true;
        if (!isOdd) count = 0;
    }
    return false;
};
