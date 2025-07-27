// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const partitionArray = (nums, k) => {
    nums.sort((a, b) => a - b);
    let count = 1;
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num - min > k) {
            min = num;
            count++;
        }
    }
    return count;
};
