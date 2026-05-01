// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = nums => {
    const n = nums.length;
    let leftSum = nums.reduce((prev, curr) => prev + curr, 0);
    let left = 0;
    let right = 0;
    let result = -Infinity;
    let rightSum = 0;
    for (let i = 0; i < n; i++) left += nums[i] * i;

    for (let i = n - 1; i >= 0; i--) {
        rightSum += nums[i];
        right += rightSum;

        leftSum -= nums[i];
        left -= nums[i] * i;
        result = Math.max(
            result,
            left + leftSum * (n - i) + (right - rightSum)
        );
    }

    return result;
};
