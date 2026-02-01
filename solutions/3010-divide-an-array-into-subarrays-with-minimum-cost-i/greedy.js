// time: O(N)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumCost = nums => {
    let first = nums[0];
    let second = Infinity;
    let third = Infinity;

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num < second) {
            third = second;
            second = num;
        } else if (num < third) {
            third = num;
        }
    }

    return first + second + third;
};

