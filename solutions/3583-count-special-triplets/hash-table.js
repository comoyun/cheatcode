// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialTriplets = nums => {
    const freqPrev = {};
    const freqNext = {};

    for (const num of nums) freqNext[num] = (freqNext[num] || 0) + 1;

    let count = 0;
    const MOD = 1000000007;

    for (const num of nums) {
        freqNext[num]--;

        const target = num * 2;

        const a = freqPrev[target] || 0;
        const b = freqNext[target] || 0;
        count = (count + a * b) % MOD;

        freqPrev[num] = (freqPrev[num] || 0) + 1;
    }

    return count;
};
