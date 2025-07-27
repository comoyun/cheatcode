// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    let ptr1 = 0,
        ptr2 = 0;
    while (ptr1 < nums.length) {
        if (ptr2 >= nums.length) {
            nums[ptr1++] = 0;
            continue;
        }
        if (nums[ptr2] === 0) {
            ptr2++;
            continue;
        }
        nums[ptr1++] = nums[ptr2++];
    }
    return nums;
};
