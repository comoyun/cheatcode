// time: O(N log N)
// space: O(log N)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = nums => {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let result = 0;

    while (left < right) {
        const a = nums[left++];
        const b = nums[right--];
        result = Math.max(result, a + b);
    }

    return result;
};

