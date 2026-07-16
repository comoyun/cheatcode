// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const gcdSum = nums => {
    const n = nums.length;

    const gcd = (a, b) => {
        while (b) {
            const next = b;
            b = a % b;
            a = next;
        }
        return a;
    };

    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        nums[i] = gcd(nums[i], max);
    }

    nums.sort((a, b) => a - b);
    let result = 0;

    let left = 0;
    let right = n - 1;
    while (left < right) result += gcd(nums[left++], nums[right--]);

    return result;
};
