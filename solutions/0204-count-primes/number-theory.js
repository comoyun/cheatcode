// time: O(n log log n)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = n => {
    let count = 0;
    const primes = new Array(n).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i < n; i++) {
        if (!primes[i]) continue;
        count++;
        for (let j = i * i; j < n; j += i) primes[j] = false;
    }

    return count;
};
