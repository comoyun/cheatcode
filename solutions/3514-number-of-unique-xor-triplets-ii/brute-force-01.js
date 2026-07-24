// time: O(n ^ 2)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const uniqueXorTriplets = nums => {
    const set = new Set();
    const n = nums.length;
    let result = 0;
    let max = 0;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        for (let j = i; j < n; j++) set.add(nums[i] ^ nums[j]);
    }

    for (let val = 0; val < 2 ** Math.floor(Math.log2(max) + 1); val++) {
        for (const num of nums) {
            if (set.has(num ^ val)) {
                result++;
                break;
            }
        }
    }

    return result;
};
