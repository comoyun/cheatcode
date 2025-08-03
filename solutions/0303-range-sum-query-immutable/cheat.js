// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.nums.slice(left, right + 1).reduce((ac, cu) => ac + cu, 0);
    }
}
