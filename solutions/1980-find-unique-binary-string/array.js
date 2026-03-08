// time: O(n)
// space: O(n)

/**
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = nums => {
    const result = [];

    for (let i = 0; i < nums.length; i++)
        result.push(nums[i][i] === '1' ? '0' : '1');

    return result.join('');
};
