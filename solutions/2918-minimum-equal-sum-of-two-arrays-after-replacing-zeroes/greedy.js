/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minSum = (nums1, nums2) => {
    const sum = arr => arr.reduce((s, n) => s + n, 0);
    const countZeroes = arr => arr.filter(n => !n).length;

    let sum1 = sum(nums1),
        sum2 = sum(nums2),
        zeros1 = countZeroes(nums1),
        zeros2 = countZeroes(nums2);

    if (sum2 + zeros2 > sum1 + zeros1) {
        [sum1, sum2] = [sum2, sum1];
        [zeros1, zeros2] = [zeros2, zeros1];
    }

    const total = sum1 + zeros1;
    if (!zeros2 && sum2 < total) return -1;
    if (sum2 + zeros2 <= total) return total;

    return -1;
};
