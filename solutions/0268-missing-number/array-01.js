// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let j = i;
        while (nums[j] < n && j !== nums[j]) {
            const temp = nums[j];
            [nums[j], nums[temp]] = [nums[temp], nums[j]];
        }
    }

    for (let i = 0; i < n; i++) if (i !== nums[i]) return i;

    return n;
};
