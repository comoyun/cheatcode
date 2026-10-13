// time: O(n)
// space: O(max(nums))

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAlternatingSum = nums => {
    let result = 0;
    let max = 0;

    for (const num of nums) max = Math.max(max, Math.abs(num));

    const freq = Array(max + 1).fill(0);

    for (const num of nums) freq[Math.abs(num)]++;

    let left = 0;
    let right = max;
    let idx = 0;

    while (left <= right) {
        while (left <= right && !freq[left]) left++;
        while (left <= right && !freq[right]) right--;

        if (left > right) break;

        if (idx & 1) {
            result -= left ** 2;
            freq[left]--;
        } else {
            result += right ** 2;
            freq[right]--;
        }

        idx++;
    }

    return result;
};
