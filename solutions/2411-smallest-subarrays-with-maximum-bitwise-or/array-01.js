// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallestSubarrays = nums => {
    const n = nums.length;
    const bits = new Array(32).fill(0);
    const result = new Array(n);

    for (let i = n - 1; i >= 0; i--) {
        let count = 0;

        for (let j = 0; j < bits.length; j++)
            if ((nums[i] >> j) & 1) bits[j] = i;

        for (let j = 0; j < bits.length; j++)
            count = Math.max(count, bits[j] - i + 1);

        result[i] = count;
    }

    return result;
};
