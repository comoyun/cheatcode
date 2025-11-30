// time: O(n)
// space: O(p)

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = (nums, p) => {
    const totalMod = nums.reduce((a, b) => a + b, 0) % p;
    if (totalMod === 0) return 0;

    const prefixMod = { 0: -1 };
    let sum = 0,
        result = nums.length;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const mod = sum % p;
        const target = (mod - totalMod + p) % p;

        if (target in prefixMod)
            result = Math.min(result, i - prefixMod[target]);

        prefixMod[mod] = i;
    }

    return result === nums.length ? -1 : result;
};

