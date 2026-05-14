// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isGood = nums => {
    const max = Math.max(...nums);

    if (max > nums.length) return false;
    const freq = new Array(max).fill(0);

    for (const num of nums) freq[num - 1]++;

    for (let i = 0; i < max; i++) {
        const c = freq[i];
        if ((c !== 2 && i === max - 1) || !c || (c >= 2 && i !== max - 1))
            return false;
    }
    return true;
};

