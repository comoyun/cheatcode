/*
 * @title: Sorting + Counting
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHSV2 = nums => {
    nums.sort((a, b) => a - b);
    let j = 0,
        result = 0,
        n = nums.length;
    nums[j] = [nums[j], 1];
    for (let i = 1; i < n; i++) {
        nums[i] = [nums[i], 1];
        if (nums[j][0] === nums[i][0]) nums[j][1]++;
        else nums[++j] = nums[i];
    }
    n = nums.length = j + 1;

    for (let i = 1; i < n; i++) {
        const prev = nums[i - 1];
        const curr = nums[i];
        if (curr[0] - prev[0] === 1)
            result = Math.max(result, curr[1] + prev[1]);
    }
    return result;
};
