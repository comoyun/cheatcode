// time: O(N * N * P)
// space: O(N)

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
const nthSuperUglyNumber = (n, primes) => {
    // WARNING: This solution gives TLE

    const ugly = [1];

    for (let i = 1; i < n; i++) {
        const uglyMax = ugly.at(-1);
        let min = Infinity;

        for (const num of ugly) {
            for (const prime of primes) {
                if (num * prime <= uglyMax) continue;
                min = Math.min(min, num * prime);
            }
        }

        ugly.push(min);
    }

    return ugly.at(-1);
};

