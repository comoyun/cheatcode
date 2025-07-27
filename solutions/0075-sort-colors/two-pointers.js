// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
    let red = 0, white = 0, blue = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) red++;
        else if (nums[i] === 1) white++;
        else blue++;
    }
    let i = 0, j = 0;
    for (; i < red; i++) nums[j++] = 0;
    for (i = 0; i < white; i++) nums[j++] = 1;
    for (i = 0; i < blue; i++) nums[j++] = 2;
};
