// time: o(2^m)
// space: o(2^m)

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
const numberOfWays = (n, x) => {
    /* WARNING: This solution gives TLE on LC */
    const powers = [];
    for (let i = 1; i ** x <= n; i++) powers.push(i ** x);

    let combinations = [0];
    let count = 0;

    for (const power of powers) {
        const newcombinations = [];

        for (const sum of combinations) {
            const nextsum = sum + power;

            if (nextsum === n) {
                count++;
                continue;
            }
            if (nextsum > n) continue;

            newcombinations.push(nextsum);
            newcombinations.push(sum);
        }

        combinations = newcombinations;
    }

    return count;
};
