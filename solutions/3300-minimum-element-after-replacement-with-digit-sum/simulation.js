// time: O(n log m)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minElement = nums => {
    const n = nums.length;
    let result = Infinity;

    const getDigitSum = num => {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);

            if (sum > result) break;
        }

        return sum;
    };

    for (let i = 0; i < n; i++) result = Math.min(result, getDigitSum(nums[i]));

    return result;
};
