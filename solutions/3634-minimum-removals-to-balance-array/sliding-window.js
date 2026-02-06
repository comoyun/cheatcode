// time: O(N log N)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minRemoval = (nums, k) => {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = 1;
    let keep = 1;
    for (; right < nums.length; right++) {
        if (nums[left] * k < nums[right]) left++;
        keep = Math.max(keep, right - left + 1);
    }

    return nums.length - keep;
};

