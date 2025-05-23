/*
 * @title: Greedy
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
const maximumValueSum = (nums, k, edges) => {
    let min = Infinity,
        sum = 0,
        count = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i],
            xor = num ^ k;

        if (xor > num) {
            min = Math.min(min, xor - num);
            sum += xor;
            count++;
            continue;
        }

        sum += num;
        min = Math.min(min, num - xor);
    }

    if (count & 1) sum -= min;
    return sum;
};

