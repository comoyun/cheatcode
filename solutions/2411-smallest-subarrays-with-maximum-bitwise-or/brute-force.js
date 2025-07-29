// time: O(n ^ 2)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallestSubarrays = nums => {
    /* WARNING: This solution gives TLE */
    const n = nums.length;
    const suffixOR = [...nums];
    const result = [];

    for (let i = n - 2; i >= 0; i--) suffixOR[i] |= suffixOR[i + 1];

    for (let i = 0; i < n; i++) {
        let curr = suffixOR[i] & ~nums[i];
        let count = 1;
        while (curr) curr &= ~nums[i + count++];
        result.push(count);
    }

    return result;
};

