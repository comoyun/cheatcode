// time: O(n^2)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = (nums, pivot) => {
    let write = 0;

    const insert = i => {
        const val = nums[i];
        for (let j = i; j > write; j--) nums[j] = nums[j - 1];
        nums[write++] = val;
    };

    for (let i = 0; i < nums.length; i++) if (nums[i] < pivot) insert(i);
    for (let i = write; i < nums.length; i++) if (nums[i] === pivot) insert(i);

    return nums;
};
