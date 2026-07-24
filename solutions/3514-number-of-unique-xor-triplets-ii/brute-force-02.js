// time: O(n^2)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const uniqueXorTriplets = nums => {
    const pairs = new Set();
    const result = new Set();
    const n = nums.length;

    for (let i = 0; i < n; i++)
        for (let j = i; j < n; j++) pairs.add(nums[i] ^ nums[j]);

    for (const a of pairs) for (const b of nums) result.add(a ^ b);

    return result.size;
};
