// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = nums => {
    const n = nums.length;

    let monInc = true,
        monDec = true;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            monInc = false;
            break;
        }
    }

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            monDec = false;
            break;
        }
    }

    return monInc || monDec;
};

