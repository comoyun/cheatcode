// time: O(N)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isTrionic = nums => {
    let i = 1;
    let state = 0;

    while (nums[i - 1] < nums[i]) {
        state = 1;
        i++;
    }

    while (nums[i - 1] > nums[i]) {
        if (state === 0) return false;
        state = 2;
        i++;
    }

    while (nums[i - 1] < nums[i]) {
        if (state === 0) return false;
        state = 3;
        i++;
    }

    return i === nums.length && state === 3;
};

