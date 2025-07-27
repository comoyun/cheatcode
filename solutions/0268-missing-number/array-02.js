// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    const n = nums.length;
    let xor = 0;
    for (let i = 0; i <= n; i++) 
        xor ^= i ^ (i < n ? nums[i] : 0);
    return xor;
};

