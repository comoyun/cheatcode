// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallestSubarrays = nums => {
    const n = nums.length;
    const result = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        let num = nums[i];
        let j = i - 1;

        while (j >= 0 && (num | nums[j]) !== nums[j]) {
            nums[j] |= num;
            result[j] = i - j + 1;
            j--;
        }
    }

    return result;
};

