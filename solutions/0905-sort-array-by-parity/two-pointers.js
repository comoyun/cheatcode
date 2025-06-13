/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => {
    let even = 0,
        odd = nums.length - 1;

    while (even < odd) {
        let num = nums[even];
        while (num & 1 && even < odd) {
            [nums[even], nums[odd]] = [nums[odd], nums[even]];
            odd--;
            num = nums[even];
        }
        even++;
    }

    return nums;
};

