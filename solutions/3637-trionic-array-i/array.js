// time: O(N)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isTrionic = nums => {
    let state = 0;
    for (let i = 1; i < nums.length; i++) {
        const prev = nums[i - 1];
        const curr = nums[i];

        if (curr > prev && state === 0) state = 1;
        else if (curr > prev && state === 1) continue;
        else if (curr < prev && state === 1) state = 2;
        else if (curr < prev && state === 2) continue;
        else if (curr > prev && state === 2) state = 3;
        else if (curr > prev && state === 3) continue;
        else return false;
    }

    return state === 3;
};

