// time: O(n + k)
// space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSum = (nums, k) => {
    const n = nums.length;
    const MOD = 10 ** 9 + 7;
    const bits = new Array(31).fill(0);
    let result = 0;

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        for (let j = 0; j < 31; j++) bits[j] += (1 << j) & num ? 1 : 0;
    }

    for (let i = 0; i < k; i++) {
        let num = 0;

        for (let j = 0; j < 31; j++) {
            if (bits[j]) {
                num |= 1 << j;
                bits[j]--;
            }
        }

        const lim = 10000000;
        const count = Math.floor(num / lim);
        const rem = num % lim;

        for (let j = 0; j < count; j++) {
            result += (count * lim ** 2) % MOD;
            result += (2 * lim * rem) % MOD;
            result %= MOD;
        }

        result += rem * rem;
        result %= MOD;
    }

    return result;
};

