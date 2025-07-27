// time: O(n ^ 2)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = (nums, k) => {
    const max = Math.max(...nums);
    let count = 0,
        left = 0,
        res = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == max) count++;
        while (count == k) if (nums[left++] == max) count--;
        res += left;
    }
    return res;
};
