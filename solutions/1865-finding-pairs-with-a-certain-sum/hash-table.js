// time: O(n)
// space: O(n)

class FindSumPairs {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     */
    constructor(nums1, nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;

        this.freq2 = {};
        for (const num of nums2) this.freq2[num] = (this.freq2[num] || 0) + 1;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    add(index, val) {
        const oldVal = this.nums2[index];
        const newVal = oldVal + val;

        this.freq2[oldVal]--;
        this.freq2[newVal] = (this.freq2[newVal] || 0) + 1;
        this.nums2[index] = newVal;
    }

    /**
     * @param {number} tot
     * @return {number}
     */
    count(tot) {
        let count = 0;

        for (const num of this.nums1) {
            const complement = tot - num;
            count += this.freq2[complement] || 0;
        }

        return count;
    }
}
