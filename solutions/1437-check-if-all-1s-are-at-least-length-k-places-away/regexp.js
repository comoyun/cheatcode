// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = (nums, k) => {
    if (nums.every(x => !x)) return true;
    nums = nums.join('');
    const regexp = new RegExp(`^0*1(0{${k},}1)*0*$`);
    return regexp.test(nums);
};
