// time: O(N * sqrt(P))
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumFourDivisors = nums => {
    // two checks: p * q === num || a^3 === num
    let result = 0;

    const isPrime = num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const firstFactor = num => {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return i;
        }
        return null;
    };

    for (const num of nums) {
        const a = Math.round(num ** (1 / 3));
        if (a * a * a === num && isPrime(a)) {
            result += 1 + a + a * a + num;
            continue;
        }

        const p = firstFactor(num);
        if (!p) continue;

        const q = num / p;
        if (p !== q && isPrime(p) && isPrime(q)) {
            result += 1 + p + q + num;
        }
    }

    return result;
};
