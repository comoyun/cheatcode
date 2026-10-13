// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAlternatingSum = nums => {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    let result = 0;
    let idx = 0;

    nums.sort((a, b) => b ** 2 - a ** 2);

    while (left <= right) {
        if (idx & 1) result -= nums[right--] ** 2;
        else result += nums[left++] ** 2;
        idx++;
    }

    return result;
};

