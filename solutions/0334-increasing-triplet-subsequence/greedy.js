/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = nums => {
    let first = Infinity,
        second = Infinity;

    for (const num of nums) {
        first = Math.min(first, num);
        if (num > first) second = Math.min(second, num);
        if (num > second) return true;
    }

    return false;
};
