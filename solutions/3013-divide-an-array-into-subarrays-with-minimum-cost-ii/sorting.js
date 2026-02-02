// time: O(N * (D log D))
// space: O(D)

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} dist
 * @return {number}
 */
const minimumCost = (nums, k, dist) => {
    // WARNING: This solution gives TLE
    const n = nums.length;
    let result = Infinity;

    for (let i = dist + 1; i < n; i++) {
        const window = nums.slice(i - dist, i + 1);
        window.sort((a, b) => a - b);
        let sum = nums[0];
        for (let j = 0; j < k - 1; j++) sum += window[j];
        result = Math.min(result, sum);
    }

    return result;
};
