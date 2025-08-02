// time: O(n) - updatePrefixArr
// space: O(n)

/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        this.nums = nums;
        this.prefixSum = new Array(this.nums.length).fill(0);
        this.updatePrefixArr(0);
    }

    updatePrefixArr(index) {
        let sum = index === 0 ? 0 : this.prefixSum[index - 1];
        for (let i = index; i < this.nums.length; i++) {
            sum += this.nums[i];
            this.prefixSum[i] = sum;
        }
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    update(index, val) {
        this.nums[index] = val;
        this.updatePrefixArr(index);
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if (left === 0) return this.prefixSum[right];
        return this.prefixSum[right] - this.prefixSum[left - 1];
    }
}

