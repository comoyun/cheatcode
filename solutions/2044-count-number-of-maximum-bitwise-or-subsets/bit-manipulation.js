// time: O(n * 2^n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = nums => {
    let max = 0;
    let result = 0;
    for (const num of nums) max |= num;

    const subsets = 2 ** nums.length;

    for (let i = 1; i < subsets; i++) {
        let or = 0;
        for (let j = 0; j < nums.length; j++) 
            if (i & (1 << j)) or |= nums[j];
        if (or === max) result++;
    }

    return result;
};

