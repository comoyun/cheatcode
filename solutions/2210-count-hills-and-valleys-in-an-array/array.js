// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const countHillValley = nums => {
    let left = 0;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === nums[left]) continue;
        nums[++left] = nums[right];
    }

    nums.length = left + 1;

    for (let i = 1; i < nums.length - 1; i++) {
        const prev = nums[i - 1];
        const next = nums[i + 1];
        const curr = nums[i];

        if (curr > prev && curr > next) result++;
        if (curr < prev && curr < next) result++;
    }

    return result;
};
