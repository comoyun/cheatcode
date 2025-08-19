// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = nums => {
    let len = 0;
    let result = 0;

    for (const num of nums) {
        if (num === 0) len++
        else len = 0;
        result += len;
    }

    return result;
};
