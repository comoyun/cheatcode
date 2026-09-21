// time: O(n * k)
// space: O(k)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const resultArray = (nums, k) => {
    const n = nums.length;
    let prev = new Array(k).fill(0);
    const result = new Array(k).fill(0);

    for (let i = 0; i < n; i++) {
        const curr = new Array(k).fill(0);
        const num = nums[i];

        curr[num % k]++;

        for (let j = 0; j < k; j++) curr[(num * j) % k] += prev[j];
        for (let j = 0; j < k; j++) result[j] += curr[j];

        prev = curr;
    }

    return result;
};
