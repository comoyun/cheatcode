// time: O(log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = nums => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);

        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }

    return nums[right];
};
