/*
 * @title: Prefix Sum
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
    const n = nums.length,
        prefix = [0];
    for (let i = 0, sum = 0; i < n; i++) {
        sum += nums[i];
        prefix.push(sum);
    }
    for (let i = 0; i < n; i++) {
        const leftSum = prefix[i],
            rightSum = prefix[n] - prefix[i + 1];
        if (leftSum === rightSum) return i;
    }
    return -1;
};
