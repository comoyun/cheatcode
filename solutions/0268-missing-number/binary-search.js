// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    let left = 0;
    let right = nums.length;

    const count = num => {
        let result = 0;
        for (const n of nums) if (n <= num) result++;
        return result;
    };

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (count(mid) > mid) left = mid + 1;
        else right = mid - 1;
    }

    return right;
};
