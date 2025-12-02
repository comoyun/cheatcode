// time: O(n ^ 2)
// space: O(n)

/**
 * @param {number[][]} points
 * @return {number}
 */
const countTrapezoids = points => {
    const MOD = 10n ** 9n + 7n;
    const freq = {};

    for (const [, y] of points) {
        const key = BigInt(y);
        freq[key] = (freq[key] || 0n) + 1n;
    }

    const rows = [];
    for (const y in freq) if (freq[y] >= 2n) rows.push(freq[y]);
    if (rows.length < 2) return 0;

    let result = 0n;

    for (let i = 0; i < rows.length; i++) {
        for (let j = i + 1; j < rows.length; j++) {
            const a = rows[i];
            const b = rows[j];

            const ac = (a * (a - 1n)) / 2n;
            const bc = (b * (b - 1n)) / 2n;

            result = (result + ac * bc) % MOD;
        }
    }

    return Number(result);
};
