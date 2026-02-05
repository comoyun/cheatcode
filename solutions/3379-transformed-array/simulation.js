// time: O(N)
// space: O(N)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const constructTransformedArray = nums => {
    const n = nums.length;
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        const id = (i + num) % n;

        if (num > 0) result[i] = nums[id];
        else if (num < 0) result[i] = nums.at(id);
        else result[i] = nums[i];
    }

    return result;
};
