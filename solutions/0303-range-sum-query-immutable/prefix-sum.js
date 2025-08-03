// time: O(1) - sumRange
// space: O(1) - in place

/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        this.prefix = nums;
        for (let i = 1; i < this.prefix.length; i++)
            this.prefix[i] += this.prefix[i - 1];
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if (left === 0) return this.prefix[right];
        return this.prefix[right] - this.prefix[left - 1];
    }
}

