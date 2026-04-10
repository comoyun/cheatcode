// time: O()
// space: O()

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

// Examples:
console.log(minimumDistance([1, 2, 1, 1, 3]));
console.log(minimumDistance([1, 1, 2, 3, 2, 1, 2]));
console.log(minimumDistance([1]));

