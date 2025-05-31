/*
 * @title: Array
 * @time: O(n)
 * @space: O(n)
 */

class ArrayWrapper {
    /**
     * @param {number[]} nums
     * @return {void}
     */
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * @return {number}
     */
    valueOf() {
        return this.nums.reduce((acc, curr) => acc + curr, 0);
    }

    /**
     * @return {string}
     */
    toString() {
        return '[' + this.nums.join(',') + ']';
    }
}
