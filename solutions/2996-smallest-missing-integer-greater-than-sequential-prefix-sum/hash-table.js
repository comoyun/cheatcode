// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingInteger = nums => {
    const n = nums.length;
    let result = nums[0];

    for (let i = 1; i < n; i++) {
        const prev = nums[i - 1];
        const curr = nums[i];

        if (curr - prev !== 1) break;

        result += curr;
    }

    const set = new Set(nums);

    while (set.has(result)) result++;

    return result;
};
