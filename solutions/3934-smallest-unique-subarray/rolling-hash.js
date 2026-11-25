// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const smallestUniqueSubarray = nums => {
    const n = nums.length;
    const base = 10;
    const mod = 10 ** 9 + 7;

    const possible = target => {
        const freq = {};
        let hash = 0;
        let count = 0;
        let pow = 1;

        for (let i = 1; i < target; i++) pow = (pow * base) % mod;
        for (let i = 0; i < target; i++) hash = (hash * base + nums[i]) % mod;

        freq[hash] = 1;
        count++;

        for (let i = target; i < n; i++) {
            hash = (hash - ((pow * nums[i - target]) % mod) + mod) % mod;
            hash = (hash * base + nums[i]) % mod;

            freq[hash] ??= 0;
            freq[hash]++;

            if (freq[hash] === 1) count++;
            if (freq[hash] === 2) count--;
        }

        return count > 0;
    };

    let left = 1;
    let right = n;
    let result = 0;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        if (possible(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};
