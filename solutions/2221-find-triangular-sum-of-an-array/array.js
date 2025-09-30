// time: O(n * n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = nums => {
    while (nums.length > 1) {
        const newArr = [];
        for (let i = 0; i < nums.length - 1; i++)
            newArr.push((nums[i] + nums[i + 1]) % 10);
        nums = newArr;
    }

    return nums[0];
};
