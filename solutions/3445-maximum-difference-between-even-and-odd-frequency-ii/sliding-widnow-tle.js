// time: O(n^2)
// space: O(1)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxDifference = (s, k) => {
    /* NOTE: This solution gives TLE */
    const n = s.length;
    let result = -Infinity;

    for (let left = 0; left <= n - k; left++) {
        const freq = new Array(5).fill(0);
        for (let right = left; right < n; right++) {
            freq[s[right]]++;
            const width = right - left + 1;

            if (width >= k) {
                let minEven = Infinity,
                    maxOdd = -Infinity;
                for (let count of freq) {
                    if (count === 0) continue;
                    if (count & 1) maxOdd = Math.max(maxOdd, count);
                    else minEven = Math.min(minEven, count);
                }
                if (minEven === Infinity || maxOdd === -Infinity) continue;
                result = Math.max(result, maxOdd - minEven);
            }
        }
    }
    return result;
};
