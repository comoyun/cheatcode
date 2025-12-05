// time: O(n^2)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const countPartitions = nums => {
    let result = 0;
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightSum = Infinity;
        leftSum += nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            if (rightSum === Infinity) rightSum = 0;
            rightSum += nums[j];
        }

        if ((rightSum - leftSum) % 2 === 0) result++;
    }

    return result;
};
