// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = nums => {
    let middlevalue = -Infinity,
        stack = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < middlevalue) return true;

        while (stack.length && stack[stack.length - 1] < nums[i])
            middlevalue = stack.pop();

        stack.push(nums[i]);
    }

    return false;
};

