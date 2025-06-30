/*
 * @title: Sorting + Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = nums => {
    nums.sort((a, b) => a - b);
    let result = 0;
    let i = 0;
    const n = nums.length;

    while (i < n) {
        let j = i;
        while (j < n && nums[j] === nums[i]) j++;
        let count1 = j - i;

        let k = j;
        while (k < n && nums[k] === nums[j]) k++;
        let count2 = k - j;

        if (j < n && nums[j] - nums[i] === 1)
            result = Math.max(result, count1 + count2);

        i = j;
    }

    return result;
};

