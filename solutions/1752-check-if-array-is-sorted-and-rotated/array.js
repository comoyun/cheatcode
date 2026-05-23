// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = nums => {
    const n = nums.length;
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) count++;
        if (count > 1) return false;
    }

    if (count && nums[0] < nums[n - 1]) return false;

    return true;
};

