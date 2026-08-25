// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingMultiple = (nums, k) => {
    nums.sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[j]) continue;
        nums[++j] = nums[i];
    }

    nums.length = j + 1;

    let left = 1;
    let right = 100;

    const count = target => {
        let count = 0;
        for (const num of nums) if (num % k === 0 && num <= target * k) count++;
        return count;
    };

    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        if (count(mid) === mid) left = mid + 1;
        else right = mid - 1;
    }

    return left * k;
};
