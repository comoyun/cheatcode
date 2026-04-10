// time: O(n^3)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDistance = nums => {
    let result = Infinity;
    const n = nums.length;
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            for (let k = j + 1; k < n; k++)
                if (nums[i] === nums[j] && nums[j] === nums[k])
                    result = Math.min(result, j - i + (k - j) + (k - i));

    return result === Infinity ? -1 : result;
};
