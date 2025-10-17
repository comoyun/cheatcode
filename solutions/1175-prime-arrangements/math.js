// time: O(n log log n)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const numPrimeArrangements = n => {
    const sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i <= n; i++)
        if (sieve[i]) for (let j = i * i; j <= n; j += i) sieve[j] = false;

    const primeCount = sieve.reduce((a, b) => a + b, 0);
    const nonPrimeCount = n - primeCount;

    const fact = x => {
        let res = 1n;
        for (let i = 2n; i <= BigInt(x); i++) res = (res * i) % 1000000007n;
        return res;
    };

    return Number((fact(primeCount) * fact(nonPrimeCount)) % 1000000007n);
};
