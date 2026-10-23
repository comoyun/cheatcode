// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const sortPermutation = nums => {
    const n = nums.length;
    const mod = 2 ** 32 - 1;
    let result = mod;
    for (let i = 0; i < n; i++) if (nums[i] !== i) result &= nums[i];
    return result % mod;
};

