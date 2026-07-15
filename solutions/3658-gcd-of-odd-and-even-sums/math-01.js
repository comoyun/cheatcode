// time: O(log n)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const gcdOfOddEvenSums = n => {
    const oddSum = n * n;
    const evenSum = n * (n + 1);

    const gcd = (a, b) => {
        while (b) {
            const next = b;
            b = a % b;
            a = next;
        }

        return a;
    };

    return gcd(oddSum, evenSum);
};

