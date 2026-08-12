// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubarrayLength = (nums, k) => {
    const n = nums.length;
    const freq = {};
    let left = 0;
    let right = 0;
    let result = 0;

    for (; right < n; right++) {
        const rightNum = nums[right];

        freq[rightNum] ??= 0;
        freq[rightNum]++;

        while (freq[rightNum] > k) {
            const leftNum = nums[left];

            freq[leftNum]--;
            left++;
        }

        const length = right - left + 1;
        result = Math.max(result, length);
    }

    return result;
};

