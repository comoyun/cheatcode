// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = nums => {
    nums.sort((a, b) => a - b);

    let max = 1;
    let localMax = 1;
    let maxCount = 1;
    let result = 1;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] === nums[i - 1]) localMax++;
        else localMax = 1;

        if (max < localMax) {
            maxCount = 1;
            max = localMax;
        } else if (max === localMax) {
            maxCount++;
        }

        result = maxCount * max;
    }

    return result;
};
