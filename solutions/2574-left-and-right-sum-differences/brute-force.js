// time: O(n^2)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = nums => {
    const n = nums.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) leftSum += nums[j];
        for (let j = i + 1; j < n; j++) rightSum += nums[j];

        result.push(
            rightSum > leftSum ? rightSum - leftSum : leftSum - rightSum
        );
    }

    return result;
};
