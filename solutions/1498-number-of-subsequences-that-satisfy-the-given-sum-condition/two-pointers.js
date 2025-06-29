/*
 * @title: Two Pointers
 * @time: O(n log n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const numSubseq = (nums, target) => {
    const MOD = 10n ** 9n + 7n;
    nums.sort((a, b) => a - b);

    let result = 0n;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            result += 2n ** BigInt(right - left);
            left++;
            continue;
        }
        right--;
    }

    return Number(result % MOD);
};
