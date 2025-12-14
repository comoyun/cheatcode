// time: O(N)
// space: O(N)

/**
 * @param {string} corridor
 * @return {number}
 */
const numberOfWays = corridor => {
    const MOD = 10 ** 9 + 7;
    let result = 1;
    const pairs = [];

    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'P') continue;

        if (!pairs.length || pairs[pairs.length - 1].length === 2)
            pairs.push([]);

        pairs[pairs.length - 1].push(i);
    }

    if (!pairs.length || pairs[pairs.length - 1].length & 1) return 0;

    for (let i = 1; i < pairs.length; i++) {
        const [, prevEnd] = pairs[i - 1];
        const [currentStart] = pairs[i];
        result *= currentStart - prevEnd;
        result %= MOD;
    }

    return result;
};

