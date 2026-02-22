// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = nums => {
    const result = new Array(nums.length);
    let even = 0;
    let odd = 0;

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (curr & 1) {
            result[odd] = curr;
            odd += 2;
        } else {
            result[even] = curr;
            even += 2;
        }
    }

    return result;
};
