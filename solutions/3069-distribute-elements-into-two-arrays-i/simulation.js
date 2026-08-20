// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const resultArray = nums => {
    const n = nums.length;
    const result = new Array(n);
    let j = 0;
    let k = n - 1;

    result[j] = nums[0];
    result[k] = nums[1];

    for (let i = 2; i < n; i++) {
        if (result[j] > result[k]) result[++j] = nums[i];
        else result[--k] = nums[i];
    }

    for (let i = 0; i < (n - k) >> 1; i++)
        [result[k + i], result[n - i - 1]] = [result[n - i - 1], result[k + i]];

    return result;
};

